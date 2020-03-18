import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  credential = {username: '', password: ''};
  errorMessage: string;

  constructor(private authService: AuthenticateService, private http: HttpClient, private router: Router) {
}

  ngOnInit(): void {
  }
  

  login(){
    console.log('login......',this.credential);
    this.authService.authenticate(this.credential).subscribe((result) => {
           console.log('after authenticate...',result);
      });
  }

  logout() {
    console.log('logout......',this.credential);
    this.http.post('logout', {}).subscribe((result)=>{
        this.authService.authenticated = false;
        this.router.navigateByUrl('/login');
    });
  }

}
