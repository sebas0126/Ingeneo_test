import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SpotifyProvider } from '../../providers/spotify/spotify'

@IonicPage()
@Component({
  selector: 'page-pop-search',
  templateUrl: 'pop-search.html',
})
export class PopSearchPage {

  artistName: string;
  artistList: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private spotifySrvc: SpotifyProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopSearchPage');
  }

  addArtist(artist){
    this.navParams.data.add(artist);
  }

  searchArtist() {
    if(!this.artistName){
      this.artistList = [];
      return;
    }
    this.spotifySrvc.getArtist(this.artistName, 10)
      .subscribe(res => {
        this.artistList = res;
        this.artistList = this.artistList.artists.items;
    })
  }

}
