import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';
// import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public pDUrl: string = environment.apiPDUrl + 'keerthyPumps/';
  public baseUrl: string = environment.apiBaseUrl + '/keerthyPumps';

  constructor(private httpClient: HttpClient) { }

  loginFn1 = (login: Login) => {
    const headers = {
                      'content-type': 'application/json',
                      'pkey':'3fdfabc1bcc185d03fe95d7e7dc9803d',
                      'apikey':'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX'
                    };
    const body = JSON.stringify(login);
    console.log(this.baseUrl,'login log',login);
    return this.httpClient.post<Login>(this.baseUrl, body,{'headers':headers});
  }

  getFn() {
    const headers = {
      'content-type': 'application/json',
      'pkey':'3fdfabc1bcc185d03fe95d7e7dc9803d',
      'apikey':'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX'
    };
    console.log("working!");
    return this.httpClient.get(this.baseUrl,{'headers':headers})
  }
  putfn(data : any) {
    const headers = {
        'content-type': 'application/json',
        'pkey':'3fdfabc1bcc185d03fe95d7e7dc9803d',
        'apikey':'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX'
    };
    const body = JSON.stringify(data);

    console.log(this.pDUrl,'put working',data);
    return this.httpClient.put(this.baseUrl, body,{'headers':headers});
  }
  delfn(id : any) {
    const headers = {
                      'content-type': 'application/json',
                      'pkey':'3fdfabc1bcc185d03fe95d7e7dc9803d',
                      'apikey':'hCA0zjIgflDAMsOJcSLoY5hzlYoNFSRX'
                    };
    // const body = JSON.stringify(login);
    const params = new HttpParams().set('id', id);
    return this.httpClient.delete(this.pDUrl,{'headers':headers,params});
  }
}
