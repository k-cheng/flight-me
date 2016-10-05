import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//apiKey: ke883055594958501035836070646560
@Injectable()
export class SkyscannerService{
  private searchUrl: string;


  constructor(private _http:Http) {

  }

  searchCity(str:string, type="city") {
    this.searchUrl = 'http://partners.api.skyscanner.net/apiservices/pricing/v1.0/'+sessionKey+'?apiKey='+apiKey;
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }
}