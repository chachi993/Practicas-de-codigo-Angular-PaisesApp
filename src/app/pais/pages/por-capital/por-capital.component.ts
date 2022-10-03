import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino : string = '';
  hayErrors : boolean = false;
  paises: Pais[] = []; 
  
  constructor(private paisService: PaisService) { }

  buscar(termino: string){
   this.hayErrors = false;
   this.termino = termino; //el del argumento

   this.paisService.buscarCapital(this.termino)
   .subscribe(
    (paises) => {
      this.paises = paises;
    },
    (err) => {
      this.hayErrors= true;
      this.paises = []; //hay un error. esos no son los paises que hay que mostrar
  });
  }
}
