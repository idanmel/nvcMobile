import { Component, OnInit } from '@angular/core';

import { FeelingsMet } from '../../data/feelings-met'
import { NvcList } from '../../models/nvc-list.model'

@Component({
  selector: 'page-feelings-met',
  templateUrl: 'feelings-met.html',
})
export class FeelingsMetPage implements OnInit {
  feelingsMet: NvcList[];

  ngOnInit() {
    this.feelingsMet = FeelingsMet;
  }
}
