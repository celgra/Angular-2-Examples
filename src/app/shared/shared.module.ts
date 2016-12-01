
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationalCounterComponent }   from './presentational-counter.component';

@NgModule({
    imports: [],
    declarations: [PresentationalCounterComponent],
    exports: [PresentationalCounterComponent, CommonModule]
})
export class SharedModule { }
