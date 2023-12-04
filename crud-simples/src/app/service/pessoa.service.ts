import { Injectable } from "@angular/core";
import { Pessoa } from "../model/pessoa";

@Injectable({
    providedIn: 'root'
})
export class PessoaService {
    private _pessoas: Pessoa[] = []
    get pessoas(): Pessoa[] {
        return this._pessoas
    }
    set pessoas(pessoas: Pessoa[]) {
        this._pessoas = pessoas
    }
}