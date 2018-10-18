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
    ) {
    route.params.subscribe(value => {
      this.service.findById(+value.id);
    });
  }

  ngOnInit() {
  }

  getTodolist() {
    this.todolist = this.service.todolist;
    return this.todolist;
  }

  onSubmit(taskForm, idTodolist: number) {
    const task = {
      content: taskForm.value.content,
      done: false
    }
    this.service.saveTaskWithTodolist(task, idTodolist);
    taskForm.reset();
    console.log(task);
  }

  onClick(task, idTodolist: number) {
    task.done = !task.done;
    const editTask = {
      id: task.id,
      content: task.content,
      done: task.done
    };
    this.taskService.setDoneValue(editTask, idTodolist);
  }

  onClickDelete(id: number) {
    alert('cliqué');
    this.taskService.delete(id);
  }

}
