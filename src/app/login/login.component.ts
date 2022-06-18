import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form_login!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {

    this.form_login = this._formBuilder.group({
      email: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  onSubmit(){
    console.log(this.form_login.value);

    this._http.post('https://httpbin.org/post', JSON.stringify(this.form_login.value))
      .pipe(map((res: any) => res))
      .subscribe((dados: any) => {
        console.log(dados)

        this.form_login.reset();
      },
      (error:any) => alert('Erro ao conectar com o servidor.'));
  }

  verificaValidTouched(campo:any){
    return !this.form_login.controls[campo].valid && this.form_login.controls[campo].touched;
  }

  aplicaCssErro(campo:any){
    return {
      'is-invalid': this.verificaValidTouched(campo)
    }
  }

}
