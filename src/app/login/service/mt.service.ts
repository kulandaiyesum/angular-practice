import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Mt } from '../model/mt';

@Injectable({
  providedIn: 'root'
})
export class MtService {
  public mtUrl : string = environment.apikpmtUrl

  constructor(private http : HttpClient) { }

  mtSaveFn( mt : Mt) {
    const headers = {
                      'content-type': 'application/json',
                      'pkey':'3fdfabc1bcc185d03fe95d7e7dc9803d',
                      'apikey':'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX'
                    };
    const body = JSON.stringify(mt);
    console.log('st save working');
    return this.http.post(this.mtUrl,body,{'headers':headers});
  }
  mtgetFn() {
    const headers = {
      'content-type': 'application/json',
      'pkey':'3fdfabc1bcc185d03fe95d7e7dc9803d',
      'apikey':'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX'
    };
    console.log("working!");
    return this.http.get(this.mtUrl,{'headers':headers})
  }
}
