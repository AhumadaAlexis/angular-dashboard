import { Component, OnInit, Injectable } from '@angular/core';
import { NorthwindService } from 'src/app/services/northwind.service';
import { tokenKey, rol } from 'src/app/pages/login/login.component';
import {Router, CanActivate} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  resultStatus: any;
  decoded: any;

  constructor(private north: NorthwindService,private router: Router) { }

  ngOnInit(): void {
    this.north.getValidUser(tokenKey).subscribe((result: any)=> {
    },(error:any)=>{
      alert('Su sesión expiró vuelva a iniciar sesión');
      this.router.navigate(['']);
    });
  }
  
  onSubmit(){
    this.router.navigate(['']);
  }
}
@Injectable()
export class OnlyBar implements CanActivate {

  constructor(
    private httpClient: HttpClient
  ) { }

  canActivate(){
    if(rol == 'ROL_BARRAS'){
      return true;
    }else{
      alert('No tiene permiso para acceder a esta página');
      return false;
    }
  }
}