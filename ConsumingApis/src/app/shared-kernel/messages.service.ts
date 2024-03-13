import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Schemes } from "../model/billingmaster";

@Injectable({
    providedIn: 'root'
})

export class MesssagesService {

    // BehaviorSubject is used in RxJS to provide an observable stream that emits the most recent value to all subscribers and requires an initial value upon creation.

    SchemeSubject = new BehaviorSubject(new Schemes);

    // Yo priceCategory component bata trigger hune vayo
    SchemeChangeEvent(): Observable<Schemes> {
        return this.SchemeSubject.asObservable();
    }


    // Yo scheme component bata trigger hune vayo
    TriggerSchemeChangeEvent(schemes: Schemes): void {
        this.SchemeSubject.next(schemes);
    }

}