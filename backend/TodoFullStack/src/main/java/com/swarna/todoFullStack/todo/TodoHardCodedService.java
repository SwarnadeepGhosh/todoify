package com.swarna.todoFullStack.todo;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {

	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;

	static {
		todos.add(new Todo(++idCounter, "user", "My first Todo", new Date(), false));
		todos.add(new Todo(++idCounter, "user", "Spring Boot microservices", new Date(), true));
		todos.add(new Todo(++idCounter, "user", "Angular", new Date(), false));
	}

	public List<Todo> getAllTodos() {
		return todos;
	}

	public Todo findById(long id) {
		for(Todo todo : todos){
			if(todo.getId() == id) return todo;
		}
		return null;
	}
	public Todo deleteById(long id){
		Todo todo = findById(id);

		if(todo == null) return null;
		if(todos.remove(todo)) return todo;
		return null;
	}


}
