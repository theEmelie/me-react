import React, { Component } from 'react';

import '../styles/forms.css';

class EditReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            report: []
        };
        this.getWeeklyReport();

        this.fieldChange = this.fieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fieldChange(field, e) {
        let fields = this.state.report;

        fields[field] = e.target.value;
        this.setState({
            fields
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const url = "https://me-api.emelieaslund.me/reports/update-report";

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                weeknumber: this.state.report["weeknumber"],
                title: this.state.report["title"],
                description: this.state.report["description"]
            }),
            headers: {'Content-Type': 'application/json', 'x-access-token':
            sessionStorage.getItem('jwtToken')}
        })
            .then(res => res.json())
            .then(response => this.handleEditResponse(response));
    }

    handleEditResponse(response) {
        if (response.hasOwnProperty("data")) {
            window.location.href="/reports";
        } else {
            alert('ERROR!');
        }
    }

    getWeeklyReport() {
        // console.log(this.props.match);
        let number = this.props.match.params.weeknumber;
        const url = `https://me-api.emelieaslund.me/reports/edit-week/${number}`;

        fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'x-access-token':
            sessionStorage.getItem('jwtToken')}
        })
            .then(res => res.json())
            .then(response => this.saveReportData(response));
    }

    saveReportData(response) {
        let report = [];

        report["weeknumber"] = response.data[0].weeknumber;
        report["title"] = response.data[0].title;
        report["description"] = response.data[0].description;
        this.setState({
            report: report
        });
    }

    render() {
        return (
            <div className="Form1">
                <h2>Redigera Rapport</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                Veckonummer: {this.state.report["weeknumber"]}<br/>
                    </label><br/>

                    <label>
                Titel: <br/>
                        <input name="title" className={this.state.title}
                            type="text" value={this.state.report["title"] || ""}
                            onChange={this.fieldChange.bind(this, "title")} />
                    </label><br/>

                    <label>
                Beskrivning: <br/>
                        <textarea rows="25" cols="70" name="description"
                            className={this.state.description} type="text"
                            value={this.state.report["description"] || ""}
                            onChange={this.fieldChange.bind(this, "description")} />
                    </label><br/>

                    <input type="submit" className="input-submit" value="Redigera" />
                </form>
            </div>
        );
    }
}

export default EditReport;
