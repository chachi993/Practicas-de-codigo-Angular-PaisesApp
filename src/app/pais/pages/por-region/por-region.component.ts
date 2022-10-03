import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 6px;
    }`
  ]
})
export class PorRegionComponent  {
regiones: string[] = ['eu', 'efta', 'caricom', 'pa' ,'au','usan','eeu','al' ,'asean','cais','cefta' ,'nafta' ,'saarc' ];
regionActiva: string = '';
paises: Pais[] = [];  

  constructor(private paisService: PaisService) { }

activarRegion(region: string) {
  if(region == this.regionActiva) {return}
  this.regionActiva = region;
  this.paises= [];
// getClaseCss(region: string) {
//   return (region === this.regionActiva) ?  'btn-primary' : 'btn-outline-primary'
//}
this.paisService.buscarRegion(region)
.subscribe(paises => this.paises = paises)
}

}
