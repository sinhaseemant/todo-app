import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  notes = ['My First Note', 'My Second Note', 'My Third Note', 'My Fourth Note'];

  constructor() { }

  ngOnInit(): void {
  }


}
