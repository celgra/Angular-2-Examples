import { Component, OnInit } from '@angular/core';

import { TonyService } from './tony.service';

@Component({
    selector: 'tony',
    templateUrl: 'tony.component.html'
})

export class TonyComponent implements OnInit {
  constructor(private tonyService: TonyService) {}
  ngOnInit() {}
}
