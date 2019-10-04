import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Me from './components/Me.js';
import Report from './reports/Report.js';
import Forms from './components/Forms.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import EditReport from './reports/EditReport.js';
import ChatClient from './socket/ChatClient.js';

import './styles/App.css';


class App extends Component {
    // componentDidUpdate(prevProps) {
    //     if (this.props.match.params !== prevProps.match.params) {
    //         this.getReports();
    //     }
    // }
  render() {
      let loginLink;
      const loggedIn = sessionStorage.getItem('jwtToken') != null;

      if (!loggedIn) {
          loginLink = <li key="login"><Link to="/login/">Logga In</Link></li>;
      } else {
          loginLink = <li key="logout"><Link to="/logout/">Logga Ut</Link></li>;
      }

    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li key="home"><Link to="/">Hem</Link></li>
              <li key="reports"><Link to="/reports/">Veckorapporter</Link></li>
              <li key="form"><Link to="/forms/">Registrering</Link></li>
              <li key="chat"><Link to="/chat-client/">Chatt</Link></li>
              {loginLink}
            </ul>
          </nav>
          <Route exact path="/" component={Me} />
          <Route exact path="/reports/" component={Report} />
          <Route path="/forms/" component={Forms} />
          <Route path="/login/" component={Login} />
          <Route path="/logout/" component={Logout} />
          <Route path="/reports/edit-report/:weeknumber" component={EditReport} />
          <Route path="/chat-client/" component={ChatClient} />
          <div className="footer">
            <p>Copyright &copy; Emelie Åslund</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
