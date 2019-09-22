import React, { Component } from 'react';

import '../styles/forms.css';

class AddReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {}
        }

        let token = sessionStorage.getItem('jwtToken')
        if (token == null) {
            window.location.href="/login";
        }

        this.fieldChange = this.fieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fieldChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({
            fields
        });
    }

    handleAddResponse(response) {
        if (response.hasOwnProperty("data")) {
            window.location.href="/reports";
        } else {
            console.log(response.error)
            alert('ERROR: Duplicerat veckonummer')
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.fields);
            const url = "https://me-api.emelieaslund.me/reports/add-report";
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    weeknumber: this.state.fields["weeknumber"],
                    title: this.state.fields["title"],
                    description: this.state.fields["description"]
                }),
                headers: {'Content-Type': 'application/json', 'x-access-token': sessionStorage.getItem('jwtToken')}
            })
            .then(res => res.json())
            .then(response => this.handleAddResponse(response));
        }

    render() {
        return (
            <div className="Form1">
            <h2>Skapa en ny Rapport</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                Veckonummer: <br/>
                <input name="weeknumber" className={this.state.weeknumber} type="number" value={this.state.weeknumber} onChange={this.fieldChange.bind(this, "weeknumber")} />
                </label><br/>

                <label>
                Titel: <br/>
                <input name="title" className={this.state.title} type="text" value={this.state.title} onChange={this.fieldChange.bind(this, "title")} />
                </label><br/>

                <label>
                Beskrivning: <br/>
                <textarea rows="25" cols="60" name="description" className={this.state.description} type="text" value={this.state.description} onChange={this.fieldChange.bind(this, "description")} />
                </label><br/>

                <input type="submit" className="input-submit" value="Lägg till" />
            </form>
            </div>
        );
    }
}

export default AddReport;
