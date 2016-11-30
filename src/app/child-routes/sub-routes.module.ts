import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SubRoutesRoutingModule } from './sub-routes-routing.module';

import { SubRoutesComponent } from './sub-routes.component';
import { NgRxCounterContainerComponent }   from './ngrx-counter-container.component';
import { SubRoutesLandingComponent } from './sub-routes-landing.component';

@NgModule({
    imports: [
        SubRoutesRoutingModule,
        SharedModule
        ],
    declarations: [
        SubRoutesComponent,
        NgRxCounterContainerComponent,
        SubRoutesLandingComponent
    ],
})

export class SubRoutesModule { }
