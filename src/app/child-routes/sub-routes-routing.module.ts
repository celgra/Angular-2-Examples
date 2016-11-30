import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubRoutesComponent } from './sub-routes.component';
import { TonyComponent } from '../tony.component';
import { NgRxCounterContainerComponent } from './ngrx-counter-container.component';
import { SubRoutesLandingComponent } from './sub-routes-landing.component';

const subRoutes: Routes = [
    {
        path: 'sub-routes',
        component: SubRoutesComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'ngrx-counter-container', component: NgRxCounterContainerComponent},
                    { path: 'tony', component: TonyComponent},
                    { path: '', component: SubRoutesLandingComponent}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(subRoutes)],
    exports: [RouterModule],
})
export class SubRoutesRoutingModule { }
