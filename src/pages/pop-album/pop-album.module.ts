import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopAlbumPage } from './pop-album';

@NgModule({
  declarations: [
    PopAlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(PopAlbumPage),
  ],
})
export class PopAlbumPageModule {}
