import { Component, OnInit } from '@angular/core';

import { FeelingsUnmet } from '../../data/feelings-unmet'
import { NvcList } from '../../models/nvc-list.model'

@Component({
  selector: 'page-feelings-unmet',
  templateUrl: 'feelings-unmet.html',
})
export class FeelingsUnmetPage implements OnInit {
  feelingsUnmet: NvcList[];

  ngOnInit() {
    this.feelingsUnmet = FeelingsUnmet;
  }
}
