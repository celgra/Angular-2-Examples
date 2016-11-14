import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
    selector: 'service-counter',
    template: `
        {{counterService.counter}}
        <button (click)="counterService.increment()">INCREMENT</button>
        <button (click)="counterService.decrement()">DECREMENT</button>
        <button (click)="counterService.reset()">RESET</button>
    `
})

export class ServiceCounterComponent {

    constructor(private counterService: CounterService){

    }
}