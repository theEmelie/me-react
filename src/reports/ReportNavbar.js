import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import WeekOne from './WeekOne.js';
import WeekTwo from './WeekTwo.js';

class ReportNavbar extends Component {
  render() {
      // console.log('reportnavbar')
    return (
      <Router>
        <div className="ReportNav">
            <ul>
              <li><Link to="/reports/week/1">kmom01</Link></li>
              <li><Link to="/reports/week/2">kmom02</Link></li>
            </ul>
          <Route exact path="/reports/:week/1" component={WeekOne} />
          <Route exact path="/reports/:week/2" component={WeekTwo} />
        </div>
      </Router>
    );
  }
}

export default ReportNavbar;
