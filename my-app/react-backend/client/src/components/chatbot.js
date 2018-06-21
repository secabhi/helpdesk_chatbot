import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import iconBot from '../helpdesk-icon-1.png';
import iconUser from '../deskavatar.png';
import icon from '../helpdesk-icon.jpg';
//import { Review } from './review'
import { constvalue } from '../constants/negative'

function cheackval(val) {
  if (constvalue.welcome.indexOf(val.previousValue) !== -1) {
    return 'Sorry, Didn\'t understand that';
  }
  return val.previousValue;
}

function cheackassitval(val) {
  if (constvalue.general.indexOf(val.previousValue) !== -1) {
    return 'Sorry to hear that you lost your ' + val.previousValue.split(' ')[val.previousValue.split(' ').length - 1]
  }
  else if (val.previousValue.split(' ').indexOf('lost')!== -1) {
    //return datas.length
    return 'Sorry to hear that you lost your ' + val.previousValue.split(' ')[val.previousValue.split(' ').length - 1];
  }
  return val.previousValue;
}

function checkassistrigger(val) {
  let datas = Object.values(val.steps);
  if (constvalue.general.indexOf(val.value) !== -1) {
    if (datas[datas.length - 1].value === val.value) {
      return datas.length
    }
  }
  else if (val.value.split(' ').indexOf('lost')!== -1) {
    return datas.length
    //return 'Sorry to hear that you lost your ' + val.value.split(' ')[val.value.split(' ').length - 1];
  }
  else {
    if (datas[datas.length - 1].message === "Sorry, Didn't understand that" && !val.value) {
      return 1
    }
    else {
      return datas.length;
    }
  }
}

function checktrigger(val) {
  let datas = Object.values(val.steps);
  if (constvalue.welcome.indexOf(val.value) !== -1) {
    if (datas[datas.length - 1].message === val.value) {
      return datas.length
    } else if (val.value) {
      let index = datas.findIndex(x => x.value == val.value);
      if (index !== -1) {
        return 25;
      }
    }
  } else {
    if (datas[datas.length - 1].message === "Sorry, Didn't understand that" && !val.value) {
      return 1
    }
    else if (val.value) {
      let index = datas.findIndex(x => x.value == val.value);
      if (index !== undefined && index !== -1) {
        if (index == 2) {
          return 3;
        }
      }
      else if (index === undefined) {
        if (datas[datas.length - 1].message === "Sorry, Didn't understand that")
          return datas.length + 1;
      }
    }

    else {
      return datas.length;
    }
  }
}

function checkname(val) {
  if (constvalue.welcome.indexOf(val.previousValue) !== -1) {
    return 'Sorry, Didn\'t understand that';
  }
  return 'Hey ' + val.previousValue;
}

const steps = [
  {
    id: '0',
    message: 'Hi , Welcome to ARUBA helpdesk!',
    trigger: '1',
  },
  {
    id: '25',
    message: 'Sorry, Didn\'t understand that',
    trigger: '1',
  },
  {
    id: '1',
    message: 'May I know your Name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    message: checkname,
    trigger: checktrigger
  },
  {
    id: '3',
    message: checkname,
    trigger: checktrigger,
  },
  {
    id: '4',
    message: 'How may I assist you?',
    trigger: 5,
  },
  {
    id: '5',
    user: true,
    message: cheackassitval,
    trigger: checkassistrigger,
  },
  {
    id: '6',
    message: cheackassitval,
    trigger: '10',
  },
  {
    id: '7',
    message: 'E-Mail address is {previousValue}.',
    trigger: '8'
  },
  {
    id: '8',
    message: 'Do you need any other information?',
    trigger: 'yesnooption'
  },
  {
    id: 'lostoption',
    options: [
      { value: 'Did you lost something', label: 'NO', trigger: 'lostyes' },
      { label: 'YES', trigger: '4' },
    ],
    user: false
  },
  {
    id: 'lostyes',
    message: 'What did you lost?',
    trigger: '9'
  },
  {
    id: '9',
    options: [
      { value: 'Wallet', label: 'wallet', trigger: '9' },
      { value: 'Laptop', label: 'laptop', trigger: '9' },
      { value: 'Mobile', label: 'mobile', trigger: '9' },
    ],
    user: false
  },

  {
    id: 'yesnooption',
    options: [
      { value: 'Thanks for using Aruba ChatBot.', label: 'NO', trigger: '22' },
      { label: 'YES', trigger: '4' },
    ],
    user: false
  },
  {
    id: '9',
    message: 'Sorry to hear that you lost your {previousValue}!',
    trigger: '10'
  },
  {
    id: '10',
    message: 'You should contact following people',
    trigger: '11'
  },
  {
    id: '11',
    options: [
      { value: 'rahul@hpe.', label: 'Rahul', trigger: '12' },
      { value: 'shweta@hpe.', label: 'Shweta', trigger: '12' },
    ],
    user: false
  },
  {
    id: '12',
    message: 'Do you have any message to send to {previousValue}?',
    user: false,
    trigger: '13'
  },
  {
    id: '13',
    options: [
      { value: 'yes', label: 'Yes', trigger: '14' },
      { value: 'no', label: 'No', trigger: '15' },
    ],
    user: false
  },
  {
    id: '14',
    message: 'Please specify the message?',
    user: false,
    trigger: '16'
  },
  {
    id: '16',
    user: true,
    trigger: '17'
  },
  {
    id: '17',
    message: 'You have written {previousValue}. Should I continue?',
    user: false,
    trigger: '18'
  },
  {
    id: '18',
    options: [
      { value: 'yes', label: 'Yes', trigger: '19' },
      { value: 'no', label: 'No', trigger: '15' },
    ],
    user: false
  },
  {
    id: '19',
    message: 'Your message has been sent',
    user: false,
    trigger: '20'
  },
  {
    id: '20',
    message: 'Do you want anything else?',
    user: false,
    trigger: '21'
  }, {
    id: '21',
    options: [
      { value: 'yes', label: 'Yes', trigger: '4' },
      { value: 'no', label: 'No', trigger: '22' },
    ],
    user: false
  },
  {
    id: '22',
    message: 'It\'s a pleasure to serve you',
    user: false,
    trigger: '23'
  },
  {
    id: '23',
    message: 'Bbye',
    user: false,
    end: true
  },


  {
    id: '15',
    message: 'Message sent',
    user: false,
    trigger: '20'
  },
]


export default class ChatHelpDesk extends Component {

  componentDidMount() {
    //   fetch('/users')
    //     .then(res => res.json())
    //     .then(users => this.setState({ users }));
    this.setState({ users: steps })
  }
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    //this.state = { username: null };
  }
  render() {
    return (
      <div>
        {this.state.users.length == 0 ? "You will soon be attented..." : <ChatBot width="375px" recognitionEnable="true" recognitionLang="en" userAvatar={iconUser} botAvatar={iconBot} steps={this.state.users} />}

      </div>
    )
  }
}
