import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'minha-conta', component: PerfilComponent },
  { path: 'minha-conta/meu-carrinho', component: CarrinhoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'catalogo' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
