import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
    selector: 'ngrx-counter-container',
    template: `
        This is a child route. <br>
        <presentational-counter
        [counter]="storeService.counter | async"
        (increment)="storeService.increment($event)"
        (decrement)="storeService.decrement($event)"
        (reset)="storeService.reset($event)">
        </presentational-counter>  
    `
})
export class NgRxCounterContainerComponent {

    constructor(private storeService: StoreService) { }

}
