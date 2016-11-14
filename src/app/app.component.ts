import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroService } from './hero.service';
import { ObservableCounterService } from './observable-counter.service';
import { StoreService } from './store.service';
import { fromJS } from 'immutable';

@Component({
  selector: "app",
  templateUrl: "./app.component.html"
})

export class AppComponent implements OnInit {
  heroes: any[];
  jsonData: any[];

  constructor(private heroService: HeroService,
   private observableCounterService: ObservableCounterService,
   private storeService: StoreService){ }

  ngOnInit(){
   this.heroes = this.heroService.getHeroes();
   this.heroService.getUsers().subscribe( json => {
     this.jsonData = fromJS(json); 
    });
  }

}
