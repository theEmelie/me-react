import React, { Component } from 'react';

import '../styles/forms.css';

class ShowReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            report: []
        };
        this.getReports();

        this.triggerEdit = this.triggerEdit.bind(this);
    }

    getReports() {
        let number = this.props.match.params.number;
        const url = `https://me-api.emelieaslund.me/reports/week/${number}`;

        fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(response => this.saveReportData(response));
    }

    saveReportData(response) {
        this.setState({
            report: response.data
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.number !== prevProps.match.params.number) {
            this.getReports();
        }
    }

    triggerEdit() {
        window.location.href="/reports/edit-report/" + this.props.match.params.number.toString();
    }

    render() {
        let button;
        const loggedIn = sessionStorage.getItem('jwtToken') != null;

        if (loggedIn) {
            button = <button onClick={this.triggerEdit.bind(this)}>Redigera</button>;
        }

        const myReport = this.state.report.map(function(item) {
            return <div key={item.weeknumber} className="reports"><h2>{item.title}</h2>
                <p dangerouslySetInnerHTML={{__html: item.description}} /></div>;
        });

        return (
            <div className="reports">
                {myReport}
                <div className="editButton">
                    {button}
                </div>
            </div>
        );
    }
}

export default ShowReport;
