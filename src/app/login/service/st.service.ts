import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { St } from '../model/st'

@Injectable({
  providedIn: 'root'
})
export class StService {

  public stUrl: string =environment.apikpstUrl

  constructor(private http : HttpClient) { }

  stSaveFn( st : St) {
    const headers = {
                      'content-type': 'application/json',
                      'pkey':'3fdfabc1bcc185d03fe95d7e7dc9803d',
                      'apikey':'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX'
                    };
    const body = JSON.stringify(st);
    console.log('st save working');
    return this.http.post(this.stUrl,body,{'headers':headers});
  }
  stGetFn() {
    const headers = {
      'content-type': 'application/json',
      'pkey':'3fdfabc1bcc185d03fe95d7e7dc9803d',
      'apikey':'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX'
    };
    console.log("working!");
    return this.http.get(this.stUrl,{'headers':headers})
  }
}
