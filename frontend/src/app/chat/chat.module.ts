import { ChatdialogComponent } from './chatdialog/chatdialog.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';

import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ChatdialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports :[
    ChatdialogComponent
  ],
  providers: [ChatService]
})
export class ChatModule { }
