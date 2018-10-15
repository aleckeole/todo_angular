import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) { }

  save(body) {
    this.http.get('http://localhost:8080/api/todolist', body)
      .subscribe((r) => {
        console.log(r);
      })
  }

  findAll() {
    this.http.get('http://localhost:8080/api/todolist').subscribe(
      r => console.log(r)
    )
  }
}
