import { Component, OnInit } from '@angular/core';

import quotes from '../../data/quotes/quotes'
import { FeelingsUnmetPage } from "../feelings-unmet/feelings-unmet";
import { FeelingsMetPage } from "../feelings-met/feelings-met";
import { NeedsPage } from "../needs/needs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit  {
  quote: string;

  feelingsUnmetPush: any;
  feelingsMetPush: any;
  needsPush: any;
  constructor() {
    this.feelingsUnmetPush = FeelingsUnmetPage;
    this.feelingsMetPush = FeelingsMetPage;
    this.needsPush = NeedsPage;
  }
  ngOnInit() {
    this.quote = quotes[Math.floor(Math.random() * quotes.length)];
  }
}
