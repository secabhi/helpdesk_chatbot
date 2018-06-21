import { environment } from '../constant/apikey';

import { ApiAiClient } from 'api-ai-javascript'

export class ChatService {

    constructor() {
        this.state = {
            token : environment.dialogflow.helpdesk,
            client: new ApiAiClient({ accessToken: environment.dialogflow.helpdesk })
        }
    }
    talk(value) {
        this.state.client.textRequest(value?value:'Hi how are you').then(res=>{
            console.log(res.result.fulfillment.speech)
            return res.result.fulfillment.speech;
        }).bind(this)
    }
}