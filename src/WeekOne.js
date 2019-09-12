import React, { Component } from 'react';

class WeekOne extends Component {
    render() {
        return (
            <div className="weekone">
                <h3><a href={"https://github.com/theEmelie/me-react"} className="github">{"GitHub Repo"}</a></h3>
                <div className="line"></div>
                <h2>För att kunna köra denna react applikation behöver du göra följande:</h2>
                <h3>`npm install`</h3>
                <p>Installerar npm moduler.</p>
                <h3>`npm start</h3>
                <p>Kör applikationen i utvecklingsläge.</p>
                <h3>`npm run build`</h3>
                <p>Bygger appen för produktion till `build` mappen.</p>
            </div>
        );
    }
}

export default WeekOne;
