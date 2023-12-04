import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { AppComponent } from "../app.component";
import { PessoaService } from "../service/pessoa.service";
import { ModalAcaoComponent } from "./modal-acao/modal-acao.component";
import { PessoaComponent } from "./pessoa.component";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MAT_DATE_LOCALE } from "@angular/material/core";


@NgModule({
    declarations: [
        ModalAcaoComponent,
        PessoaComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatRadioModule,
        MatDatepickerModule,
        MatMomentDateModule
    ],
    providers: [
        PessoaService,
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
    ],
    bootstrap: [AppComponent]
})
export class PessoaModule { }
