import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

username = sessionStorage.getItem('username');
password = sessionStorage.getItem('password');

  //Mode dev
  //urlProviders = 'http://127.0.0.1:8080/providers';

  //Mode prod
  //urlProviders = 'http://www.backend.com/providers';

  provider: any;

  constructor(private Http: HttpClient) { }


  listProviders() {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username +':'+ this.password) });
    return this.Http.get(environment.urlProviders + '/list');
  }


  createProvider(myform: any) {

    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    //return this.Http.post(environment.urlProviders + '/add', this.provider,{ headers });
    return this.Http.post(environment.urlProviders + '/add', this.provider);
  }


  updateProvider(myObj: any) {
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.put(environment.urlProviders + '/' + myObj['id'], myObj);
  }

  deleteProvider(myObj: any) {
  //  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.delete(environment.urlProviders + '/' + myObj['id'])
  }

  getProvider(id: any) {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.get(environment.urlProviders + '/' + id)
  }
}