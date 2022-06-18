import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EnvioDadosCadastroService } from './envio-dados-cadastro.service';
import { map } from 'rxjs';
import { FormValidator } from '../shared/form-validator';
import { Usuario } from './usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form_cadastro!: FormGroup;
  usuario: Usuario[];
  submitted = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient,
    private _service: EnvioDadosCadastroService
    ) { }

  ngOnInit(): void {

    this.form_cadastro = this._formBuilder.group({
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      data_nasc: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
      confirmar_senha: [null, Validators.required]
    });

  }

  onSubmit(){
    this.submitted = true;
    if(this.form_cadastro.valid){
      console.log('submit');
      this._service.criarCadastro(this.form_cadastro.value).subscribe(
        success => console.log('sucesso'),
        error => console.error(error),
        () => console.log('request')
      );
    }
   
  }

  verificaValidTouched(campo:any){
    return !this.form_cadastro.controls[campo].valid && this.form_cadastro.controls[campo].touched;
  }

  aplicaCssErro(campo:any){
    return {
      'is-invalid': this.verificaValidTouched(campo),
      //'invalid-feedback': this.verificaValidTouched(campo),
    }
  }

}
