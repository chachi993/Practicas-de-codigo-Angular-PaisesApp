import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';
  paises: Pais[] = [];

  get httpParams(){
    return  new HttpParams()
    .set('fields', 'name,capital,alpha2Code,flag,population' );

  }

  constructor(private http: HttpClient) {}

    buscarPais(termino:string): Observable<Pais[]> {
      const url = `${ this.apiUrl }/name/${ termino }`;
       return this.http.get<Pais[]>( url, { params : this.httpParams } );
      // .pipe(
      //   catchError(error => of([]))
      // )
    }
    buscarCapital(termino: string): Observable<Pais[]> {
      const url = `${ this.apiUrl }/capital/${ termino }`;
       return this.http.get<Pais[]>( url, { params : this.httpParams } );
      // .pipe(
      //   catchError(error => of([]))
      // )
    }
    getPaisPorId(id: string): Observable<Pais> {
      const url = `${ this.apiUrl }/alpha/${ id }`;
       return this.http.get<Pais>( url );
      // .pipe(
      //   catchError(error => of([]))
      // )
    }
    buscarRegion(region:string): Observable<Pais[]> {
      // const params = new HttpParams()
      //     .set('fields', 'name,capital,alpha2code,flag,population' );
      
       const url = `${ this.apiUrl }/regionalbloc/${ region }`;
      return this.http.get<Pais[]>( url, { params : this.httpParams }  )
      .pipe(
        tap(console.log)
      );
    }

}
