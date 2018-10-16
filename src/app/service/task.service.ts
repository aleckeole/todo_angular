import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  setDoneValue(task, id: number) {
    this.http.post('http://localhost:8080/api/task/todolist/' + id, task).subscribe(
      r => console.log(r)
    )
  }
  
  delete(id: number) {
    this.http.delete('http://localhost:8080/api/task/' + id).subscribe();
  }
}
