import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/rx';

@Injectable()
export class ObservableCounterService {
    private counter: BehaviorSubject<number> = new BehaviorSubject(0);
    public counter$: Observable<any> = this.counter.asObservable();

    constructor() { }

    increment() {
        let counterValue = this.counter.getValue() + 1;
        this.counter.next(counterValue);
    }
    
    decrement() {
        let counterValue = this.counter.getValue() - 1;
        this.counter.next(counterValue);
    }

    reset(){
        this.counter.next(0);
    }
}