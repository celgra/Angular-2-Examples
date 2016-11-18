import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Store Stuff
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

// Component
import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { HeroListComponent } from './hero-list.component';
import { SimpleCounterComponent } from './simple-counter.component';
import { ServiceCounterComponent } from './service-counter.component';
import { PresentationalCounterComponent } from './presentational-counter.component';
import { ImmutableDataComponent } from './immutable-data.component';
import { TonyComponent } from './tony.component';
// Providers
import { HeroService } from './hero.service';
import { CounterService } from './counter.service';
import { ObservableCounterService } from './observable-counter.service';
import { StoreService } from './store.service';
import { TonyService } from './tony.service';
// Debug tool
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore({counter: counterReducer}),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: false,
        position: 'right',
        size: 0.5
      })
    }),
    StoreLogMonitorModule
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent,
    SimpleCounterComponent,
    ServiceCounterComponent,
    PresentationalCounterComponent,
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
