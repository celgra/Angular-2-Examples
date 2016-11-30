import { Component } from '@angular/core';

import { TonyService } from './tony.service';

@Component({
    selector: 'tony',
    templateUrl: 'tony.component.html'
})

export class TonyComponent {

    constructor(private tonyService: TonyService) {


    }
}
