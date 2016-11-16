import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list.component';
import { SimpleCounterComponent } from './simple-counter.component';
import { ServiceCounterComponent } from './service-counter.component';


export const routes: Routes = [
    { path: '', redirectTo: '/hero-list', pathMatch: 'full' },
    { path: 'hero-list', component: HeroListComponent},
    { path: 'simple-counter', component: SimpleCounterComponent},
    { path: 'service-counter', component: ServiceCounterComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
