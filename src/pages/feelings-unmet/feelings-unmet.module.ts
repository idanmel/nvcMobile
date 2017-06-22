import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeelingsUnmetPage } from './feelings-unmet';

@NgModule({
  declarations: [
    FeelingsUnmetPage,
  ],
  imports: [
    IonicPageModule.forChild(FeelingsUnmetPage),
  ],
  exports: [
    FeelingsUnmetPage
  ]
})
export class FeelingsUnmetPageModule {}
