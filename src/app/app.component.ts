import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroService } from './hero.service';
import { ObservableCounterService } from './observable-counter.service';
import { StoreService } from './store.service';

@Component({
  selector: "app",
  templateUrl: "./app.component.html"
})

export class AppComponent implements OnInit {
  heroes: any[];
  jsonData: any[];
  hero$;

  constructor(private heroService: HeroService,
   private observableCounterService: ObservableCounterService,
   private storeService: StoreService){ }

  ngOnInit(){
   this.heroes = this.heroService.getHeroes();
   this.hero$  = this.heroService.getUsers().subscribe( json => this.jsonData = json);
  }

  ngOnDestroy(){
    this.hero$.unsubscribe();
  }

}
