import { Component, OnInit } from '@angular/core';

import { Needs } from '../../data/needs'
import { NvcList } from '../../models/nvc-list.model'

@Component({
  selector: 'page-needs',
  templateUrl: 'needs.html',
})
export class NeedsPage implements OnInit {
  needsList: NvcList[];

  ngOnInit() {
    this.needsList = Needs;
  }
}
