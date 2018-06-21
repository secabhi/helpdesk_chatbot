import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

const steps = [
    {
        id: '0',
        message: 'Welcome to react chatbot!',
        trigger: '1',
    },
    {
        id: '1',
        message: 'Bye!',
        end: true,
    },
];


export default class ChatHelpDesk extends Component {
    constructor(props) {
        super(props);
        this.state = { username: null };
    }
    render() {
        return (
          <div>
            <p>Hello</p>
          </div>
        );
      }
}
