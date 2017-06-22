import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeelingsMetPage } from './feelings-met';

@NgModule({
  declarations: [
    FeelingsMetPage,
  ],
  imports: [
    IonicPageModule.forChild(FeelingsMetPage),
  ],
  exports: [
    FeelingsMetPage
  ]
})
export class FeelingsMetPageModule {}
