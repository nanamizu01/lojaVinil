import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvioDadosCatalogoService } from './envio-dados-catalogo.service';
import { Produto } from './produto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  produtosCD: Produto[];
  produtosVinil: Produto[];

  produtosCD$: Observable<Produto[]>;
  produtosVinil$: Observable<Produto[]>;

  constructor(
    private _service: EnvioDadosCatalogoService
  ) { }

  ngOnInit() {
    this.produtosCD$ = this._service.listarCD();

    this.produtosVinil$ = this._service.listarCD();
  }

  onClickCarrinho() {

  }

}
