import { Component, Input } from '@angular/core';
import { HeroComponent } from './hero.component';

@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html'
})

export class HeroListComponent {
    @Input() heroes :any[];
 }