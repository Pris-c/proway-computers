import { Component, OnInit } from '@angular/core';
import { IProduto, produtos} from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})


export class ProdutosComponent implements OnInit {

  produtos: IProdutoDaqui[] = produtos
  
  constructor(){}

ngOnInit(): void {
  
}

}


interface IProdutoDaqui {
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  imagem: string;
}
