import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvioDadosCatalogoService {

  private readonly API_cd = 'http://localhost:3000/produtosCD';
  private readonly API_vinil = 'http://localhost:3000/produtosVinil';

  constructor(
    private _http:HttpClient
  ) { }

  listarCD() {
    return this._http.get(this.API_cd)
      .pipe(
        tap(console.log)
      );
  }

  listarVinil() {
    return this._http.get(this.API_vinil)
      .pipe(
        tap(console.log)
      );
  }
}
