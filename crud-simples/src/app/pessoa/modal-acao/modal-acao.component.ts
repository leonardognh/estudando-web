import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pessoa } from '../../model/pessoa';
import { FormControl, FormGroup } from '@angular/forms';
import { PessoaService } from '../../service/pessoa.service';

@Component({
  selector: 'app-modal-acao',
  templateUrl: './modal-acao.component.html',
  styleUrls: ['./modal-acao.component.scss']
})
export class ModalAcaoComponent {
  titulo: string = 'Cadastrar'
  pessoaForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    nome: new FormControl(''),
    dataNascimento: new FormControl(''),
    genero: new FormControl('Outro')
  })

  constructor(
    private _dialogRef: MatDialogRef<ModalAcaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _pessoaService: PessoaService) {
    this.titulo = data.acao
    this.pessoaForm.patchValue(data.pessoa)
    // this._preencherFormulario(data.pessoa)
  }
  _preencherFormulario(pessoa: Pessoa) {
    this.pessoaForm = new FormGroup({
      id: new FormControl(pessoa.id),
      nome: new FormControl(pessoa.nome),
      dataNascimento: new FormControl(pessoa.dataNascimento?.toString()),
      genero: new FormControl(pessoa.genero)
    })
  }
  acao() {
    this.pessoaForm.markAllAsTouched();
    if (this.pessoaForm.invalid) return;

    switch (this.titulo) {
      case 'Cadastrar':
        const ids = this._pessoaService.pessoas.map(pessoa => {
          return pessoa.id;
        });

        const pessoa = this.pessoaForm.value;
        pessoa.id = 1;

        if (ids.length == 0) {
          this._pessoaService.pessoas.push(pessoa);
        } else {
          const max = Math.max(...ids);
          pessoa.id += max;
          this._pessoaService.pessoas.push(pessoa);
        }
        break;
      case 'Alterar':
        this._pessoaService.pessoas = this._pessoaService.pessoas.map(pessoa => {
          if (pessoa.id == this.pessoaForm.value.id) {
            return this.pessoaForm.value
          }
          return pessoa
        })
        break;
      case 'Excluir':
        this._pessoaService.pessoas = this._pessoaService.pessoas.filter(pessoa => pessoa.id != this.pessoaForm.value.id)
        break;
    }
    this._dialogRef.close()
  }
  fechar(): void {
    this._dialogRef.close();
  }
}
