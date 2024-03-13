import { Component, OnInit } from '@angular/core';
import { ChatService } from '../shared-kernel/chat.service';
import { Subscription } from 'rxjs';
import { chats } from '../model/chat';

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component implements OnInit {

  messages = new Array<chats>();

  message: string;

  chat2Subscription = new Subscription();
  constructor(private _chatService: ChatService) { }

  ngOnInit() {

    this.InitializeSubscription();

  }

  sendMessage() {
    if (this.message.trim() !== '') {
      this._chatService.sendMessageFromChat2(this.message);
      const chat = new chats();
      chat.from = "chat2";
      chat.message = this.message;
      this.messages.push(chat);
      this.HandleEnterEvent('chat2');
      this.message = '';
    }
  }

  HandleEnterEvent(id: string): void {
    if (id) {
      const elem = document.getElementById(id);
      if (elem) {
        elem.focus();
      }
    }
  }

  InitializeSubscription() {
    this.chat2Subscription.add(this._chatService.getMessageFromChat1().subscribe((message: string) => {
      this.handleReceivedMessage(message);
    }));
  }

  handleReceivedMessage(message: string) {
    if (message && message.trim()) {
      const chat = new chats();
      chat.from = "chat1";
      chat.message = message;
      this.messages.push(chat);
    }
  }

  ngOnDestroy(): void {
    this.chat2Subscription.unsubscribe();
  }

}
