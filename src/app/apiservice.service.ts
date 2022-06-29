import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
apiUrl:string = environment.url;
  constructor(private http: HttpClient) {}

  getApi(url:string=''){
   return this.http.get(this.apiUrl+url);
  }

  postApi(url:string='', data:any){
     return this.http.post(this.apiUrl+url, data)
  }

  putApi(url:string='', data:any){
   return  this.http.put(this.apiUrl+url, data)
  }

  deleteAPi(url:string=''){
     return this.http.delete(this.apiUrl+url)
  }
}
