import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') public leyenda:string ='Leyenda';
  @Input() public progreso:number = 50;
  @Output('actualizarValor') public cambioValor:EventEmitter<number> = new EventEmitter();
  @ViewChild('txtProgress', { static:false }) txtProgress: ElementRef;//elemnto apara acceder a un unico elemento en html como un getElementByid

  constructor() { 
    console.log('Leyenda ', this.leyenda);
    console.log('Progreso ', this.progreso);
    
  }

  ngOnInit() {
    console.log('Leyenda ', this.leyenda);
    console.log('Progreso ', this.progreso);
  }

  onChanges(newValue: number){
    console.log(newValue);
    //let elemento = document.getElementsByName('progreso')[0];

    if(newValue >= 100){
      this.progreso = 100;
    }else if(newValue <= 0){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }

    // elemento.value = this.progreso;
    // console.log('valor: ', elemento.value);

    this.txtProgress.nativeElement.value = this.progreso;
    
    this.cambioValor.emit( this.progreso );
  }

  cambiarValor( valor ){
    if(this.progreso >=100 && valor > 0){
      this.progreso = 100;
      return;
    }

    if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }
    this.progreso = Number(this.progreso) +valor;
    this.cambioValor.emit(this.progreso);
    
    this.txtProgress.nativeElement.focus();
  };

}
