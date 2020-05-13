import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaURL:'assets/css/colors/default.css',
    tema:'default'
  }

  constructor() { 
    this.cargarAjustes();
  }

  guardarAjustes(){
    //console.log('Guardando configuracion');
    
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  };

  cargarAjustes(){
    //valida si ya existe algun tema/configuracion en el localStorage si existe la recupera si no carga el tema por defecto cargado en la interfaz Ajustes
    if(localStorage.getItem('ajustes')){
      //console.log('Cargando ajustes');
      
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    }else {
      //console.log('Cargando configuracion por defecto');
      this.aplicarTema(this.ajustes.tema);
      
    }
  };

  //servicio encargado de aplicar el tema/estilo enviado por el account-setting o utilizando valores por defecto
  aplicarTema(tema:string){

    let documento = document.getElementsByName('tema')[0];
    let url = `assets/css/colors/${tema}.css`;
    documento.setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaURL = url;
    
    this.guardarAjustes();
  }

}

interface Ajustes {
  temaURL:string;
  tema:string

}
