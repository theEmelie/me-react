import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Me from './components/Me.js';
import Report from './reports/Report.js';
import Forms from './components/Forms.js';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Hem</Link></li>
              <li><Link to="/reports/">Veckorapporter</Link></li>
              <li><Link to="/forms/">Formulär</Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={Me} />
          <Route exact path="/reports/" component={Report} />
          <Route path="/forms/" component={Forms} />
          <div className="footer">
            <p>Copyright &copy; Emelie Åslund</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
