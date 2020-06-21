import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';

export class Message{

  constructor(public content: string ,public sentBy: string){}


}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient ({accessToken: this.token});

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() { }
  //adds message to source
  update(msg: Message){
    this.conversation.next([msg]);

  }

  //sends and recieves mesages via Dialogflow

  /*  converse(msg : string ){
     const userMessage = new Message(msg, 'user');
     this.update(userMessage);

     return this.client.textRequest(msg).then(res => {
        const speech = res.resut.fulfillment.speech;
        const botMessage = new Message(speech, 'bot');
        this.update(botMessage);
     });
   }*/
   converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
               .then(res => {
                  const speech = res.result.fulfillment.speech;
                  const botMessage = new Message(speech, 'bot');
                  this.update(botMessage);
               });
  }





talk(){
  this.client.textRequest ('who are you').then(res => console.log(res));
}

}
