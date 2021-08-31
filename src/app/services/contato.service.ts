import { Contato } from 'src/app/models/Contato';
import { Injectable } from '@angular/core';
const BASE_DE_CONTATOS:Contato[] =[{
  nome: "Felipe",
  email: "felipeluna_2000@hotmail.com",
  telefones: ["99195-2757"]
},
{
  nome: "Jão",
  email: "felipeluna_2000@hotmail.com",
  telefones: ["99195-2757","38462306"]
},
{
  nome: "Marcos",
  email: "felipeluna_2000@hotmail.com",
  telefones: ["99195-2757"]
},
{
  nome: "Junior",
  email: "felipeluna_2000@hotmail.com",
  telefones: ["99195-2757"]
},
{
  nome: "Carlin",
  email: "felipeluna_2000@hotmail.com",
  telefones: ["99195-2757"]
}];
@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }
  getContatos(): Contato[]{
    return BASE_DE_CONTATOS;
  }
  addContatos(contato: Contato):void{
    BASE_DE_CONTATOS.push(contato);
  }
}
