import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from '../../interfaces/IBook';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('https://electivacicd-icesi.herokuapp.com/books');
  }
}
