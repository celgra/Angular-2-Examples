import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html'
})
export class HeroListComponent {
    heroes: any[];

    constructor(private heroService: HeroService) {
        this.heroes = this.heroService.getHeroes();
    }
}
