import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //for authentication
  us: any = "huzaifa";
  pw: any = "root";
  //****************

  model: any = {
    username : null,
    password : null
  };
  loading = false;
  returnUrl = '';
  invalid = false;
  

  constructor(private router: Router) {
   }

   
  ngOnInit(): void {
  }

  login() {
    console.log("In login ()");
    this.loading = true;
    if (this.model.username == this.us && this.model.password == this.pw)
    {
      this.router.navigate(['home']);
    }
    else
    {
      console.log("Better luck next time", this.model);
      this.invalid = true;
      this.loading = false;
    }
   }


}
