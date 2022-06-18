import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { CadastroComponent } from './cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './../app-routing.module';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ]
})
export class CadastroModule { }
