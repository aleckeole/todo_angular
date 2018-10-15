import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodolistService } from 'src/app/service/todolist.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-todolist-single',
  templateUrl: './todolist-single.component.html',
  styleUrls: ['./todolist-single.component.css']
})
export class TodolistSingleComponent implements OnInit {

  id: number;
  todolist;

  constructor(private route: ActivatedRoute, 
    private service: TodolistService,
    private taskService: TaskService
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.findById(this.id);
  }

  getTodolist() {
    this.todolist = this.service.todolist;
    return this.todolist;
  }

  onSubmit(taskForm) {
    const task = {
      content: taskForm.value.content,
      done: false
    }
    this.service.saveTaskWithTodolist(task);
    console.log(task);
  }

  onClick(task) {
    task.done = !task.done;
    this.taskService.save(task);
  }

}
