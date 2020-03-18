import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Model } from '../model/model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
   'Access-Control-Allow-Origin': '*'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {


  authenticated = false;

  constructor(private http: HttpClient) { }

   authenticate(credential: any) {
    console.log('call authentication......');
   return this.http.post('auth/login',credential, httpOptions);
 }

}