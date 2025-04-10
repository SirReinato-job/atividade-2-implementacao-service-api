import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProdutoService } from '../../servicos/produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-painel-principal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './painel-principal.component.html',
  styleUrls: ['./painel-principal.component.scss'],
})
export class PainelPrincipalComponent implements OnInit {
  produtos: any[] = [];
  constructor(private produtoService: ProdutoService, private router: Router) { }
  ngOnInit(): void {
    this.listarProdutos();
  }
  listarProdutos() {
    this.produtoService.obterProdutos().subscribe((dados) => {
      this.produtos = dados;
    });
  }
  excluirProduto(id: number) {
    if (confirm("Deseja realmente excluir este produto?")) {
      this.produtoService.deletarProduto(id).subscribe(() => {
        alert("Produto excluído com sucesso!");
        this.listarProdutos();
      });
    }
  }
  editarProduto(id: number) {
    console.log('cliquei no editar produto', id);
    
    this.router.navigate(['/cadastro-produto', id]);
  }
}
