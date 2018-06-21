import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import icon from '../helpdesk-icon.png';
import { environment } from '../constant/apikey';

import { ApiAiClient } from 'api-ai-javascript'
import { ChatService } from '../http/httpservice';
import { initialdata } from '../constant/data'


export default class ChatHelpDesk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [],
            counter: 0,
            token: environment.dialogflow.helpdesk,
            client: new ApiAiClient({ accessToken: environment.dialogflow.helpdesk })
        }
        this.handleEnd = this.handleEnd.bind(this);
        this.talk = this.talk.bind(this);
    }
    componentDidMount() {

        let messages = [];
        messages.push({
            id: '1',
            message: 'Hi There',
            trigger: '2'
        });
        messages.push({
            id: '2',
            user: true,
            trigger: '3',
            validator: (value) => {
                debugger;
                if(value.length == 1){
                    return "Didn't understand that"
                }
            },
        });
        messages.push({
            id: '3',
            message: 'Welcome',
            trigger: '4'
        });
        messages.push({
            id: '4',
            message: 'Bye',
            end: true
        })

        this.setState({ steps: messages })

    }

    talk(value) {
        this.state.client.textRequest(value?value:'Hi how are you').then(res=>{
            console.log(res.result.fulfillment.speech)
            return res.result.fulfillment.speech;
        })
    }

    handleEnd({ steps, values }) {
        debugger;
    }

    render() {
        return (
            <div>
                {this.state.steps.length > 0 ? <ChatBot handleEnd={this.handleEnd} recognitionEnable={true} botAvatar={icon} steps={this.state.steps} /> : null}
            </div>
        );
    }
}