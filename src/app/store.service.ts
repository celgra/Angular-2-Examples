import { Store } from '@ngrx/store';
import { AppState } from './app-state';
import { INCREMENT, DECREMENT, RESET } from './counter.reducer';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';

@Injectable()
export class StoreService {
    counter: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter = store.select('counter');
     }

    increment() {
        this.store.dispatch({ type: INCREMENT });
    }
    
    decrement() {
        this.store.dispatch({ type: DECREMENT})
    }

    reset(){
        this.store.dispatch({ type: RESET});
    }
}