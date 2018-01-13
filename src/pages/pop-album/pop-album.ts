import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pop-album',
  templateUrl: 'pop-album.html',
})
export class PopAlbumPage {

  albums: any;
  artist: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    this.albums = this.navParams.data.albums;
    this.artist = this.navParams.data.artist;
  }

  openDetail(album){
    this.navParams.data.open(album, this.artist);
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopAlbumPage');
  }

}
