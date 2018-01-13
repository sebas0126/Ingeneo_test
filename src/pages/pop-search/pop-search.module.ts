import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopSearchPage } from './pop-search';

@NgModule({
  declarations: [
    PopSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(PopSearchPage),
  ],
})
export class PopSearchPageModule {}
