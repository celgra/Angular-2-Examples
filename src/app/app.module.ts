import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { SubRoutesModule } from './child-routes/sub-routes.module';
import { SharedModule } from './shared/shared.module';

// Store Stuff
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

// Component
import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { HeroListComponent } from './hero-list.component';
import { SimpleCounterComponent } from './simple-counter.component';
import { ServiceCounterComponent } from './service-counter.component';
// import { PresentationalCounterComponent } from './presentational-counter.component';
import { ImmutableDataComponent } from './immutable-data.component';
import { TonyComponent } from './tony.component';



// Providers
import { HeroService } from './hero.service';
import { CounterService } from './counter.service';
import { ObservableCounterService } from './observable-counter.service';
import { StoreService } from './store.service';
import { TonyService } from './tony.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    StoreModule.provideStore({counter: counterReducer}),
    AppRoutingModule,
    SubRoutesModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent,
    SimpleCounterComponent,
    ServiceCounterComponent,
    ImmutableDataComponent,
    TonyComponent
  ],
  providers: [
    HeroService,
    CounterService,
    ObservableCounterService,
    StoreService,
    TonyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
