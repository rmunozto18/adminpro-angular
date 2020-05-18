import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//llamando a una funcion externa de angular, fue necesario crear esta funcion para llamarla aqui. Se creo en el archivo custom.js 
//de esta forma podemos llamr a un script que este fuera de angular
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
    init_plugins();
  }

  public ingresar(){
    this.router.navigate(['/dashboard']);
  };

}
