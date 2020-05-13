import { Component, OnInit, ViewChild, ElementRef, Renderer2, InjectionToken, AfterViewInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';




@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
   
  constructor(public _ajustes:SettingsService ) {}
  
  ngOnInit() {
    this.colocarCheck();
  }

  public cambiarTema(estilo:string, link:any){

    this.aplicarCheck(link);
    
    let documento = document.getElementsByName('tema')[0];
    let url = `assets/css/colors/${estilo}.css`;
    documento.setAttribute('href', url);

    // this._ajustes.ajustes.tema = estilo;
    // this._ajustes.ajustes.temaURL = url;
    
    //this._ajustes.guardarAjustes();
    this._ajustes.aplicarTema(estilo);
    
    

   
  };s

  public aplicarCheck(link:any){
    let elementos:any = document.getElementsByClassName('selector');

    for(let elemento of elementos){
      elemento.classList.remove('working');
    }

    link.classList.add('working');
  };

  public colocarCheck(){
    let elementos:any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;

    for(let elemento of elementos){
      if(elemento.getAttribute('data-theme') == tema){
        elemento.classList.add('working');
        break;
      }
    }

  };

}
