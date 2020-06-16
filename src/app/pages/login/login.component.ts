import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NorthwindService } from 'src/app/services/northwind.service';
import * as jwt_decode from "jwt-decode"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : string;
  pwd : string;
  token: any;
  resultStatus: any;
  decoded: any;

  constructor(private router: Router, private north: NorthwindService) { }

  ngOnInit(): void {
    this.token = ''
  }
  
  onSubmit() {
    const body = {
      username: this.user,
      password: this.pwd
    };
    //this.router.navigate(['./inicio']);
    this.north.getLogin(body).subscribe((result: any)=> {
      tokenKey = result.token;
      this.resultStatus = result.msg;
      this.decoded = jwt_decode(tokenKey);
      console.log(this.decoded['rol']);
      rol = this.decoded['rol'];
      alert(result.msg);
      this.router.navigate(['./inicio']);
    },(error:any) =>{
      console.error(error.status)
      alert(error.msg);
    });
  }
}
export var tokenKey:string = '';
export var rol:string = '';
