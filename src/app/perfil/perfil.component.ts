import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { FormValidator } from '../shared/form-validator';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  form_att_senha!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.form_att_senha = this._formBuilder.group({
      senha_atual: [null],
      senha_nova: [null, FormValidator.equalsTo('senha')]
    });
  }

  onSubmit(){
    console.log(this.form_att_senha.value);

    this._http.post('https://httpbin.org/post', JSON.stringify(this.form_att_senha.value))
      .pipe(map((res: any) => res))
      .subscribe((dados: any) => {
        console.log(dados)

        this.form_att_senha.reset();
      },
      (error:any) => alert('Erro ao conectar com o servidor.'));
  }

  verificaValidTouched(campo:any){
    return !this.form_att_senha.controls[campo].valid && this.form_att_senha.controls[campo].touched;
  }

  aplicaCssErro(campo:any){
    return {
      'is-invalid': this.verificaValidTouched(campo)
    }
  }

}
