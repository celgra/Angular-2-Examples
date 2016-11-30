import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'simple-counter',
    template: `
        {{counter}}
        <button (click)="increment()">INCREMENT</button>
        <button (click)="decrement()">DECREMENT</button>
        <button (click)="reset()">RESET</button>
    `
})

export class SimpleCounterComponent implements OnInit {
    counter: number;

    constructor() { }

    increment() {
        this.counter++;
    }

    decrement() {
        this.counter--;
    }

    reset() {
        this.counter = 0;
    }

    ngOnInit() {
        this.counter = 0;
     }
}