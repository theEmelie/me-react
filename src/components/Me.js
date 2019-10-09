import React, { useEffect, useState } from 'react';

import max from '../images/max.jpg';
import emelie from '../images/emelie.jpg';

const Me = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('https://me-api.emelieaslund.me')
        .then(res => res.json())
        .then(res => setMessage(res.data[0].msg));
    });

    return (
        <main>
            <h1>Min me-app</h1>
            <img src={max} alt="Max" />
            <img className="me" src={emelie} alt="Me" />
            <p>{message}</p>
        </main>
    );
};

export default Me;
