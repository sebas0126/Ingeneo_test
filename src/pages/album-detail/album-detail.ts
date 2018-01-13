import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-album-detail',
  templateUrl: 'album-detail.html',
})
export class AlbumDetailPage {

  artist: string;
  album: any;

  showIframe = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sanitizer: DomSanitizer
  ) {
    this.artist = this.navParams.data.artist;
    this.album = this.navParams.data.album;
  }

  sanitizeUrl(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumDetailPage');
  }

}
