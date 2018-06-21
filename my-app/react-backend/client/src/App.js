import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatHelpDesk from './components/chatbot.js';

class App extends Component {
//   state = {users: []}
//
// componentDidMount() {
//     fetch('/users')
//       .then(res => res.json())
//       .then(users => this.setState({ users }));
//    }
  render() {
    return (
      <div className="App">
      <ChatHelpDesk/>
    </div>
    );
  }
}

export default App;
