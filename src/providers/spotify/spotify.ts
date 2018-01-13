import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SpotifyApi } from '../../classes/strings'

@Injectable()
export class SpotifyProvider {

  constructor(public http: HttpClient) {
  }

  getToken(){
    let log = btoa(SpotifyApi.CLIENT_ID + ":" + SpotifyApi.CLIENT_SECRET);
    var head = {
      "Authorization": "Basic " + log
    };
    var body = {
      'grant_type': 'client_credentials'
    }
    let url = 'https://accounts.spotify.com/api/token';
    return this.http.post(url, body, {headers: head}).toPromise()
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  getArtist(artist, count){
    let url = SpotifyApi.URL + `/search?q=${artist}&type=artist&limit=${count}`;
    var head = {
      "Content-type": "application/json",
      "Authorization": "Bearer " + SpotifyApi.TOKEN
    };
    return this.http.get(url, {
      headers: head
    });
  }

  getArtists(idArr){
    let ids = idArr.join("%2C");
    let url = SpotifyApi.URL + `/artists?ids=${ids}`;
    var head = {
      "Content-type": "application/json",
      "Authorization": "Bearer " + SpotifyApi.TOKEN
    };
    return this.http.get(url, {
      headers: head
    });
  }

  getAlbums(id){
    let url = SpotifyApi.URL + `/artists/${id}/albums`;
    var head = {
      "Content-type": "application/json",
      "Authorization": "Bearer " + SpotifyApi.TOKEN
    };
    return this.http.get(url, {
      headers: head
    });
  }

}
