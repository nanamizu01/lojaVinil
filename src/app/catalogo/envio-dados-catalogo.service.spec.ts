import { TestBed } from '@angular/core/testing';

import { EnvioDadosCatalogoService } from './envio-dados-catalogo.service';

describe('EnvioDadosCatalogoService', () => {
  let service: EnvioDadosCatalogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioDadosCatalogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
