import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Todolist {
  id: number;
  title: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  todolists: any[] = [];
  todolist: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  save(body) {
    this.http.post('http://localhost:8080/api/todolist', body)
      .subscribe((r: Todolist) => {
        console.log(r);
        this.router.navigate(['todolist/' + r.id]);
      });
  }

  saveWithCategory(todolist, idCategory: number) {
    this.http.post('http://localhost:8080/api/todolist/category/' + idCategory, todolist)
      .subscribe((r: Todolist) => {
        console.log(r);
        this.router.navigate(['todolist/' + r.id]);
      });
  }

  findAll() {
    this.http.get<Todolist[]>('http://localhost:8080/api/todolist').subscribe(
      (r) => {
        this.todolists = r;
      }
    );
  }

  findById(id: number) {
    this.http.get<Todolist>('http://localhost:8080/api/todolist/' + id).subscribe(
      (r) => {
        console.log(r);
        this.todolist = r;
      }
    );
  }

  saveTaskWithTodolist(task, id: number) {
    this.http.post('http://localhost:8080/api/task/todolist/' + id, task).subscribe(
      (r) => {
        console.log(r);
        this.todolist.tasks.push(r);
      }
    );
  }

  delete(id: number) {
    this.http.delete('http://localhost:8080/api/todolist/' + id).subscribe();
  }
}
