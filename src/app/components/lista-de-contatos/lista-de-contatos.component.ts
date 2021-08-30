import { Contato } from 'src/app/models/Contato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {
  contatos: Contato[] = [
    {
      nome: "Felipe",
      email: "felipeluna_2000@hotmail.com",
      telefones: ["99195-2757"]
    },
    {
      nome: "Jão",
      email: "felipeluna_2000@hotmail.com",
      telefones: ["99195-2757"]
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
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
