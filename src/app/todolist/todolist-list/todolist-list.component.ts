import { Component, OnInit } from '@angular/core';
import { TodolistService } from 'src/app/service/todolist.service';

@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html',
  styleUrls: ['./todolist-list.component.css']
})
export class TodolistListComponent implements OnInit {

  constructor(private service: TodolistService) { }

  ngOnInit() {
    this.service.findAll();
  }

}
