import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodolistListComponent } from './todolist/todolist-list/todolist-list.component';
import { RouterModule, Routes } from '@angular/router';
import { TodolistSingleComponent } from './todolist/todolist-single/todolist-single.component';

const appRoutes: Routes = [
  { path: '', component: TodolistListComponent },
  { path: 'todolist/:id', component: TodolistSingleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodolistListComponent,
    TodolistSingleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
