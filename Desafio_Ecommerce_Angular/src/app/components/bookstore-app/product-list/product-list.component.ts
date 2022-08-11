import { Component, OnInit } from '@angular/core';
import { book } from './model/book';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: Array<book> = [];
  booksService: BooksService;

  constructor( booksService: BooksService) {

    this.booksService = booksService;
  
  }
  ngOnInit(): void {

    this.booksService.getBook().subscribe(data => {
      this.livros = this.formataPrecos(data.books.splice(0, 5)); 
        console.log(this.livros);
    })

  }

  
  formataPrecos(lista: Array<book>) {
    for (let i = 0; i < lista.length; i++) {
      const precoSemSimbolo = lista[i].price.substring(1);
      lista[i].priceInNumber = Number(precoSemSimbolo);
    }
    return lista;
  }
}
