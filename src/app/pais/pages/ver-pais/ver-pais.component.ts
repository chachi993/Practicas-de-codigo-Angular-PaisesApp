import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

pais!: Pais;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPaisPorId(id)), 
      tap( console.log )
    )
    .subscribe( pais => this.pais = pais );
    }
    // this.activedroute.params
    // .subscribe(({ id }) => {
    //   console.log(id);
    //   this.paisService.getPaisPorId(id)
    //   .subscribe(pais => {
    //     console.log(pais);
    //   })
    //)
  

}
