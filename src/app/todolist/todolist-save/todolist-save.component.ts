import { Component, OnInit } from '@angular/core';
import { TodolistService } from 'src/app/service/todolist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist-save',
  templateUrl: './todolist-save.component.html',
  styleUrls: ['./todolist-save.component.css']
})
export class TodolistSaveComponent implements OnInit {

  constructor(private service: TodolistService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(todoForm) {
    this.service.save(todoForm.value);
    this.router.navigate(['todolist/2']);
  }

}
