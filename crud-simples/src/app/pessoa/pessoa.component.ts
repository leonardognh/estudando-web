import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAcaoComponent } from './modal-acao/modal-acao.component';
import { Pessoa } from '../model/pessoa';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent {
  pessoas: Pessoa[] = []
  constructor(private _dialog: MatDialog, private _pessoaService: PessoaService) { }
  ngOnInit(): void {
    this.pessoas = this._pessoaService.pessoas
  }
  acao(acao: string, pessoa?: Pessoa) {
    const dialogRef = this._dialog.open(ModalAcaoComponent, {
      width: '400px',
      data: { acao, pessoa }
    })
    dialogRef.afterClosed().subscribe(() => {
      this.pessoas = this._pessoaService.pessoas
    })
  }
}
