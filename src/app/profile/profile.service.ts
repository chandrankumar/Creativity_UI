import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  createProfile(profile: Profile) {
    console.log('create Profile', profile);
  }
  
  updateProfile(){
    console.log('update Profile');
  }

  
}
