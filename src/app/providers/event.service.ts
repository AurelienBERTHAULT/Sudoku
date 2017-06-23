import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class EventService {

    constructor(){}

    publish(eventName, data) {
        if(this.hasOwnProperty(eventName)) {
            this[eventName].emit(data);
        }
    }

    onEvent(eventName) {
        if(!this.hasOwnProperty(eventName)) {
            this[eventName] = new EventEmitter();
        }

        return this[eventName];
    }
}