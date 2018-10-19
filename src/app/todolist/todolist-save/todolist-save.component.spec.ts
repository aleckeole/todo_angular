import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistSaveComponent } from './todolist-save.component';

describe('TodolistSaveComponent', () => {
  let component: TodolistSaveComponent;
  let fixture: ComponentFixture<TodolistSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
