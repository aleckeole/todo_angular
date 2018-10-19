import { Component, OnInit } from '@angular/core';
import { TodolistService } from 'src/app/service/todolist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist-save',
  templateUrl: './todolist-save.component.html',
  styleUrls: ['./todolist-save.component.css']
})
export class TodolistSaveComponent implements OnInit {

  title: string = 'Nouvelle todolist';

  constructor(private service: TodolistService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(todoForm) {
    this.service.saveWithCategory(todoForm.value, 1);
    this.router.navigate(['todolist/2']);
  }

}
