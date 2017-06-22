import { Component, OnInit } from '@angular/core';

import quotes from '../../data/quotes/quotes'
import { FeelingsUnmetPage } from "../feelings-unmet/feelings-unmet";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit  {
  quote: string;

  feelingsUnmetPush: any;
  constructor() {
    this.feelingsUnmetPush = FeelingsUnmetPage;
  }
  ngOnInit() {
    this.quote = quotes[Math.floor(Math.random() * quotes.length)];
  }
}
