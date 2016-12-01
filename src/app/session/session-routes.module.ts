import { NgModule } from '@angular/core';

import { SessionComponent } from './session.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'session', component: SessionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionRoutesModule { }
