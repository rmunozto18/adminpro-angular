import { Component, OnInit } from '@angular/core';

//llamando a una funcion externa de angular, fue necesario crear esta funcion para llamarla aqui. Se creo en el archivo custom.js 
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
