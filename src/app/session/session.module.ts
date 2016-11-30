import { NgModule } from '@angular/core';

import { SessionComponent } from './session.component';
import { SessionRoutesModule } from './session-routes.module';

@NgModule({
    imports: [SessionRoutesModule],
    declarations: [SessionComponent],
})
export class SessionModule { }
