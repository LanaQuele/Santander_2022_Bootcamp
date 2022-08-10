import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { book } from "./model/book";
import { Observable } from 'rxjs';
import { BookList } from './model/book-list';


@Injectable()

export class BooksService{
    private url = 'https://api.itbook.store/1.0/search/mongodb';

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json'})
    }

    constructor( private http: HttpClient){}

    getBook():Observable<BookList> {
        return this.http.get<BookList>(this.url);
    }
}
