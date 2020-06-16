import { Component, OnInit } from '@angular/core';
import { tokenKey } from '../login/login.component';
import { NorthwindService } from 'src/app/services/northwind.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {

  constructor(private north: NorthwindService, private router: Router) { }

  ngOnInit(): void {
    this.north.getValidUser(tokenKey).subscribe((result: any)=> {
    },(error:any)=>{
      alert('Su sesión expiró vuelva a iniciar sesión');
      this.router.navigate(['']);
    });
  }

}
