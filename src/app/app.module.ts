import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AlbumDetailPage } from '../pages/album-detail/album-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { SpotifyProvider } from '../providers/spotify/spotify';
import { PopSearchPageModule } from '../pages/pop-search/pop-search.module';
import { PopAlbumPageModule } from '../pages/pop-album/pop-album.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AlbumDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    PopSearchPageModule,
    PopAlbumPageModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AlbumDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpotifyProvider
  ]
})
export class AppModule {}
