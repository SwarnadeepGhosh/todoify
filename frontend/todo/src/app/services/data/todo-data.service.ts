import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/components/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  getAllTodos(username: any) {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: any, id: number) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  getTodo(username: any, id: number) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: any, id: number, todo: Todo) {
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: any, todo: Todo) {
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }
}
