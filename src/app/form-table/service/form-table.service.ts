import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormTableService {
  public baseUrl: string = environment.apiBaseUrl + '/keerthyPumps';
  constructor(private httpClient: HttpClient) { }

  // getValues() {
  //   console.log(this.baseUrl,"it works!");
  //   return this.httpClient.get(this.baseUrl)
  // }
  getFn() {
    const headers = {
      'content-type': 'application/json',
      'pkey':'3fdfabc1bcc185d03fe95d7e7dc9803d',
      'apikey':'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX'
    };
    console.log("working!");
    return this.httpClient.get(this.baseUrl,{'headers':headers})
  }
}
