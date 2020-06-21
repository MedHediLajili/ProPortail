import { ChatService , Message } from './../chat.service';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/internal/Observable';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'chatdialog',
  templateUrl: './chatdialog.component.html',
  styleUrls: ['./chatdialog.component.css']
})
export class ChatdialogComponent implements OnInit {

  messages : Observable<Message[]>;
  formValue : string;

  constructor(private chat: ChatService) { }

  ngOnInit(): void {
    //appends to array after each new message is addedto feedSource
     this.messages = this.chat.conversation.asObservable().pipe(scan((acc ,val) => acc.concat(val)));

     // this.chat.talk();
  }


  sendMessage(){
    this.chat.converse(this.formValue);
    this.formValue='';
  }

}
