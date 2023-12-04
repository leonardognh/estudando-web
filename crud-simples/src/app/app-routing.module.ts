import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ModalAcaoComponent } from './pessoa/modal-acao/modal-acao.component';

const routes: Routes = [
  {
    path: '',
    component: PessoaComponent
  },
  {
    path: 'modal',
    component: ModalAcaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
