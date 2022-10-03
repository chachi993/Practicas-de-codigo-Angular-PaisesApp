import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent  {
  termino : string = '';
  hayErrors : boolean = false;
  paises: Pais[] = []; 
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias :boolean =  false;
  
  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.mostrarSugerencias = false;
   this.hayErrors = false;
   this.termino = termino; //el del argumento

   this.paisService.buscarPais(this.termino)
   .subscribe(
    (paises) => {
      console.log(paises);
      this.paises = paises;
    },
    (err) => {
      this.hayErrors= true;
      this.paises = []; //hay un error. esos no son los paises que hay que mostrar
  });
  }
  sugerencias(termino: string){
    this.mostrarSugerencias = true;
    this.hayErrors = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
    .subscribe(
      paises => this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []
      );
  }
  mostrarSugerido(termino: string){
    this.buscar(termino);
    
  }

}
