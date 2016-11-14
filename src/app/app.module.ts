import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

// Store Stuff
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

// Component
import { AppComponent } from "./app.component";
import { HeroComponent } from "./hero.component";
import { HeroListComponent } from "./hero-list.component";
import { SimpleCounterComponent } from "./simple-counter.component";
import { ServiceCounterComponent } from "./service-counter.component";
import { PresentationalCounterComponent } from "./presentational-counter.component";

//Providers
import { HeroService } from './hero.service';
import { CounterService } from './counter.service';
import { ObservableCounterService } from './observable-counter.service';
import { StoreService } from './store.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    StoreModule.provideStore({counter: counterReducer})
  ],
  declarations: [
    AppComponent, 
    HeroComponent,
    HeroListComponent,
    SimpleCounterComponent,
    ServiceCounterComponent,
    PresentationalCounterComponent
  ],
  providers: [
    HeroService,
    CounterService,
    ObservableCounterService,
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}