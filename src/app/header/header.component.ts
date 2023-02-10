import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public carrinhoService: CarrinhoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  navegarCarrinho(){
    this.router.navigate(["carrinho"]);
  }

  navegarProdutos(){
    this.router.navigate(["produtos"]);
  }

  navegarContato(){
    this.router.navigate(["contato"]);
  }
}