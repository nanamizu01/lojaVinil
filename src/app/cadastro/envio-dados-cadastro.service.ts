import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvioDadosCadastroService {

  private readonly API_usuarios = 'http://localhost:3000/usuarios';

  constructor(
    private _http: HttpClient
  ) { }

  criarCadastro(usuario: Usuario){
    return this._http.post(this.API_usuarios, usuario).pipe(take(1));
  }
  
}
