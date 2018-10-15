import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistSingleComponent } from './todolist-single.component';

describe('TodolistSingleComponent', () => {
  let component: TodolistSingleComponent;
  let fixture: ComponentFixture<TodolistSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
