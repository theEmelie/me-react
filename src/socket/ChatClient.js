import React, { Component } from 'react';
import io from 'socket.io-client';
import { animateScroll } from "react-scroll";

import '../styles/chatclient.css';

class ChatClient extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            message: '',
            messages: [],
        };

        this.socket = io('http://me-api.emelieaslund.me');

        this.socket.on('msgReceived', function(data) {
            addMessage(data);
            });

        this.sendMessage = e => {
            e.preventDefault();
            const userMessage = this.state.message;

            if (userMessage.length !== 0 && this.state.username.length !== 0) {
                this.socket.emit('msgSend', {
                        timestamp: Date.now(),
                        user: this.state.username,
                        message: this.state.message,
                    });
                this.setState({message: ''});
            }
        };

        this.setUsername = e => {
           const username = this.state.username;

           this.setState({username: username});
       };

       const addMessage = data => {
           const allMessages = [
               ...this.state.messages,
               data
           ];

           this.setState({messages: allMessages}, this.scrollToBottom);
       };
   }

    scrollToBottom() {
        animateScroll.scrollToBottom({
            containerId: "allMessages", smooth: "easeOutQuint"
    });
}

    render() {
        return (
            <div className="Form1">
                <h2>Meddelanden:</h2>
                <div id="allMessages" className="allMessages">
                {this.state.messages.map((message, key) => {
                    return (
                        <div className="chatLine" key={key}>
                        {message.timestamp} - {message.user}: {message.message}</div>
                    );
                })}
                </div>
                Ange ett användarnamn:
                <div className="username">
                    <form onSubmit={this.setUsername}>
                        <input type="text" className="usernameBox" required
                        value={this.state.username}
                        onChange={e => this.setState({username: e.target.value})} />
                    </form>
                </div>
                <br />
                Skriv nytt meddelande:
                <textarea id="newMessage" className="newMessage" required
                    value={this.state.message}
                    onChange={e => this.setState({message: e.target.value})} />
                <button onClick={this.sendMessage} className="button">Skicka</button>
            </div>
        );
    }
}

export default ChatClient;
