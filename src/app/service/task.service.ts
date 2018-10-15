import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  save(task) {
    console.log(task);
    this.http.post('http://localhost:8080/api/task', task).subscribe(
      r => console.log(r)
    )
  }
}
