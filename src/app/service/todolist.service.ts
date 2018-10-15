import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  todolists:any[] = [];
  todolist:any;

  constructor(private http: HttpClient) { }

  save(body) {
    this.http.post('http://localhost:8080/api/todolist', body)
      .subscribe((r) => {
        console.log(r);
      })
  }

  findAll() {
    this.http.get<any[]>('http://localhost:8080/api/todolist').subscribe(
      (r) => {
        this.todolists = r;
      }
    )
  }

  findById(id: number) {
    this.http.get<any>('http://localhost:8080/api/todolist/' + id).subscribe(
      (r) => {
        this.todolist = r;
      }
    );
  }

  saveTaskWithTodolist(task) {
    this.http.post('http://localhost:8080/api/task/todolist/1', task).subscribe(
      (r) => {
        console.log(r);
        this.todolist.tasks.push(r);
      }
    );
  }
}
