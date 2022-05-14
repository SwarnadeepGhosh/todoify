import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../../services/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  message: string | undefined;
  todos: Todo[] = [];
  // [
  //   new Todo(1, 'My first Todo', true, new Date()),
  //   new Todo(1, 'Welcome to India', false, new Date()),
  //   new Todo(1, 'Angular project', true, new Date()),
  // ];

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.getAllTodos('user').subscribe((response) => {
      // console.log(response);
      this.todos = response;
    });
  }

  deleteTodo(id: number) {
    console.log(`Todo Deleted ${id}`);
    this.todoService.deleteTodo('user', id).subscribe((response) => {
      console.log(response);
      this.message = `Delete of Todo ${id} successful`;
      this.refreshTodos();
    });
  }

  updateTodo(id: number) {
    console.log(`Todo Updated- ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }
}
