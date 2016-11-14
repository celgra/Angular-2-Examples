import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'presentational-counter',
    template: `
        {{counter}}
        <button (click)="increment()">INCREMENT</button>
        <button (click)="decrement()">DECREMENT</button>
        <button (click)="reset()">RESET</button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush 
})
export class PresentationalCounterComponent {
    @Input() counter: number;
    @Output("increment") incrementCounter = new EventEmitter();
    @Output("decrement") decrementCounter = new EventEmitter();
    @Output("reset") resetCounter = new EventEmitter();

    increment(){
        this.incrementCounter.emit();
    }

    decrement(){
        this.decrementCounter.emit();
    }

    reset(){
        this.resetCounter.emit();
    }


}