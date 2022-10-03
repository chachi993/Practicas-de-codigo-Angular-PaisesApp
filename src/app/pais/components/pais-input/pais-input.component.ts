import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject  } from 'rxjs';
import { debounceTime  } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //envio
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = ""; //recibo el placeholder
  
  debouncer: Subject<string> = new Subject(); //es como un observable, se emite cuando dejo de escribir
  termino: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
     .pipe(
       debounceTime(300) //ms de espera hasta emitir antes de emitir el proximo valor
     )
    .subscribe(valor => { //me subscribo al this.debouncer
      console.log(valor);
      this.onDebounce.emit(valor);
    });
  }

  buscar(){
    this.onEnter.emit(this.termino); //emitiendo el valor
  }

  teclaPresionada(){
    this.debouncer.next(this.termino); //el next esta subscripto a la linea 22
   }

}
