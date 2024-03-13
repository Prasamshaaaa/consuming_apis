import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ChatService {


    messageSubjectFromChat1 = new BehaviorSubject<string>('');
    messageSubjectFromChat2 = new BehaviorSubject<string>('');



    sendMessageFromChat1(message: string) {
        this.messageSubjectFromChat1.next(message);
    }

    sendMessageFromChat2(message: string) {
        this.messageSubjectFromChat2.next(message);
    }

    getMessageFromChat1() {
        return this.messageSubjectFromChat1.asObservable();
    }
    getMessageFromChat2() {
        return this.messageSubjectFromChat2.asObservable();
    }


}