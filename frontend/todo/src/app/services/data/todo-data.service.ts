import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/components/list-todos/list-todos.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllTodos(username: any) {
    return this.http.get<Todo[]>(`${this.baseUrl}/users/${username}/todos`);
  }

  deleteTodo(username: any, id: number) {
    return this.http.delete(`${this.baseUrl}/users/${username}/todos/${id}`);
  }

  getTodo(username: any, id: number) {
    return this.http.get<Todo>(`${this.baseUrl}/users/${username}/todos/${id}`);
  }

  updateTodo(username: any, id: number, todo: Todo) {
    return this.http.put(`${this.baseUrl}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: any, todo: Todo) {
    return this.http.post(`${this.baseUrl}/users/${username}/todos`, todo);
  }
}
