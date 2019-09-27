import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import ShowReport from './ShowReport.js';
import AddReport from './AddReport.js';

class ReportNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: []
        };
        this.getWeeks();
    }

    getWeeks() {
        const url = "https://me-api.emelieaslund.me/reports/get-weeknumbers";

        fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(response => this.displayNavbarLinks(response));
    }

    displayNavbarLinks(response) {
        // console.log(response);
        this.setState({
            reports: response.data
        });
    }

    render() {
        const weeks = this.state.reports.map(function(item) {
            let linkString = "kmom0" + item.weeknumber;

            return <li key={item.weeknumber}><Link to=
                {`/reports/week/${item.weeknumber}`}>{linkString}</Link></li>;
        });

        return (
            <Router>
                <div className="ReportNav">
                    <ul>
                        <li key="add"><Link to="/reports/add-report">Skapa ny rapport</Link></li>
                        <br />
                        <br />
                        {weeks}
                    </ul>
                    <Route strict path="/reports/week/:number" component={ShowReport} />
                    <Route exact path="/reports/add-report" component={AddReport} />
                </div>
            </Router>
        );
    }
}

export default ReportNavbar;
