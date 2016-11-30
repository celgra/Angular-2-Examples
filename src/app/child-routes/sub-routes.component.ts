import { Component } from '@angular/core';

@Component({
    selector: 'selector',
    template: `
        This is a route.<br>
        <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Landing Component</a>
        <a routerLink="./ngrx-counter-container" routerLinkActive="active">Redux Counter</a>
        <router-outlet>
    `
})
export class SubRoutesComponent {
    constructor() { }

}
