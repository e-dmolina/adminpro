import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static:true}) txtProgress:ElementRef;

  @Input() progreso:number = 50;
  @Input() leyenda:string = "Leyenda";
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor:number){

    if (this.progreso == 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    if (this.progreso == 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    this.progreso += valor;

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

  sobreCambio(nuevoValor:number){
    
    if (nuevoValor <= 0) {
      this.progreso = 0;
    }else if (nuevoValor >= 100) {
      this.progreso = 100;
    }else{
      this.progreso=nuevoValor;
    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);

  }

}
