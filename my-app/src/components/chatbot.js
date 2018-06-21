import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import icon from '../helpdesk-icon.png';

const steps = [
    {
        id: '0',
        message: 'Welcome to ARUBA helpdesk ChatBot!',
        trigger: '1',
    },
    {
        id: '1',
        message: 'How may I assist you?',
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
            <ChatBot botAvatar={icon} steps={steps} />
          </div>
        );
      }
}
