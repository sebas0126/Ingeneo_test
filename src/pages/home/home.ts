import { Component } from '@angular/core';
import { NavController, PopoverController, ToastController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { SpotifyProvider } from '../../providers/spotify/spotify'

import { PopSearchPage } from '../pop-search/pop-search';
import { PopAlbumPage } from '../pop-album/pop-album';

import { Constants } from '../../classes/strings';
import { AlbumDetailPage } from '../album-detail/album-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  favoriteArtists = [];
  favoriteIds = [];

  constructor(
    public navCtrl: NavController,
    public spotifySrvc: SpotifyProvider,
    private popCtrl: PopoverController,
    private storeSrvc: Storage,
    private toastCtrl: ToastController
  ) { 
    this.spotifySrvc.getToken();
    this.getStoredFavorites();
  }

  getStoredFavorites(){
    let favorites;
    let dataRes;
    this.storeSrvc.get(Constants.STORE_DATA.FAVORITES)
    .then(data => {
      if(!data) return;
      this.favoriteIds = data;
      this.spotifySrvc.getArtists(data)
      .subscribe(res => {
        dataRes = res;
        this.favoriteArtists = this.favoriteArtists.concat(dataRes.artists);
      })
    })
  }

  addArtist = artist => {
    this.favoriteArtists.push(artist);
    this.favoriteIds.push(artist.id);
    this.storeSrvc.set(Constants.STORE_DATA.FAVORITES, this.favoriteIds)
    let toast = this.toastCtrl.create({
      message: 'Artista agregado exitosamente',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  openSearchPop(e){
    let pop = this.popCtrl.create(PopSearchPage, {
      add: this.addArtist
    });
    pop.present({
      ev: e
    });
  }

  openAlbumDetail = (album, artist) => {
    this.navCtrl.push(AlbumDetailPage, {
      album: album,
      artist: artist
    })
  }

  openAlbumPop(e, artist){
    let resData;
    this.spotifySrvc.getAlbums(artist.id)
    .subscribe(res => {
      resData = res;

      let pop = this.popCtrl.create(PopAlbumPage, {
        albums: resData.items,
        open: this.openAlbumDetail,
        artist: artist.name
      });
      pop.present({
        ev: e
      });
    })
  }

}
