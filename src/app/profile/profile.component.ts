import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from './profile.service'
import { Profile } from './profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  createProfileForm: FormGroup;
  profile: Profile = new Profile();
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {

    this.createProfileForm = new FormGroup({
      userName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      fullName: new FormControl(),
      language: new FormControl()
   });

  }

  onCreate(){
    console.log('create', this.createProfileForm.value);
    this.profile = <Profile>this.createProfileForm.value;
    this.profileService.createProfile(this.profile);
  }
}
