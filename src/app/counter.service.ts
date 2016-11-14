import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
counter = 0;

    constructor() { }

    increment(){
        this.counter++;
    }

    decrement(){
        this.counter--;
    }

    reset(){
        this.counter = 0;
    }
}