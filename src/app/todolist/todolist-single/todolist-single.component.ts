import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodolistService } from 'src/app/service/todolist.service';

@Component({
  selector: 'app-todolist-single',
  templateUrl: './todolist-single.component.html',
  styleUrls: ['./todolist-single.component.css']
})
export class TodolistSingleComponent implements OnInit {

  id: number;
  todolist;

  constructor(private route: ActivatedRoute, private service: TodolistService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.findById(this.id);
  }

  getTodolist() {
    this.todolist = this.service.todolist;
    return this.todolist;
  }

}
