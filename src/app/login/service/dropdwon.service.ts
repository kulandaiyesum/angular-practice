import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Dropdwon } from './../model/dropdwon';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DropdwonService {
  public drpUrl: string = environment.apiDropdwonUrl + '/MKpumps';


  constructor(private http: HttpClient) { }
  

  dppost( dropdwon : Dropdwon) {
    const headers = {
                      'content-type': 'application/json',
                      'pkey':'3fdfabc1bcc185d03fe95d7e7dc9803d',
                      'apikey':'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX'
                    };
    const body = JSON.stringify(dropdwon);
    console.log( dropdwon, "dropdwon component value")
    return this.http.post(this.drpUrl,body,{'headers': headers});
  }
  dpget(){
    const headers = {
                      'content-type': 'application/json',
                      'pkey':'3fdfabc1bcc185d03fe95d7e7dc9803d',
                      'apikey':'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX'
                    };
    console.log("get dp serve");
    return this.http.get(this.drpUrl,{'headers': headers});
    
  }
}
