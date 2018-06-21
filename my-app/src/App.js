import React, { Component } from 'react';
import logo from './logo.jpeg';
import deskicon from './deskavatar.png';

import './App.css';

import ChatHelpDesk from './components/chatbot.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ARUBA HelpDesk ChatBot</h1>

        </header>
        <div>
          <h1 class="App-left-body">Overcome all hurdles and provide consistent self-service answers with our IT Helpdesk Bot 
            <div class="body-image"><img src={deskicon} className="body-logo" alt="logo" /></div>
          </h1>
        </div>
<ChatHelpDesk/>

      </div>
    );
  }
}

export default App;
