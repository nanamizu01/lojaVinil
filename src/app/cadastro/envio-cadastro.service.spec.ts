import { TestBed } from '@angular/core/testing';

import { EnvioDadosCadastroService } from './envio-dados-cadastro.service';

describe('EnvioCadastroService', () => {
  let _service: EnvioDadosCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    _service = TestBed.inject(EnvioDadosCadastroService);
  });

  it('should be created', () => {
    expect(_service).toBeTruthy();
  });
});
