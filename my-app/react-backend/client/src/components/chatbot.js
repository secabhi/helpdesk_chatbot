import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import icon from '../helpdesk-icon.jpg';

// const steps = [
//     {
//         id: '0',
//         message: 'Welcome to react chatbot!',
//         trigger: '1',
//     },
//     {
//         id: '1',
//         message: 'Bye!',
//         end: true,
//     },
// ];


export default class ChatHelpDesk extends Component {

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
   }
    constructor(props) {
        super(props);
        this.state = {
          users:[]
        };

        //this.state = { username: null };
    }
    render() {
    return (
      <div>
          {this.state.users.length==0?"You will soon be attented...":<ChatBot width="375px" recognitionEnable="true" recognitionLang="en" botAvatar={icon} steps={this.state.users} />}
      </div>
    )
  }
}
