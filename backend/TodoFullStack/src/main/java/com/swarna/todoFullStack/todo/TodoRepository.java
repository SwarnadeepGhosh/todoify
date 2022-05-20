package com.swarna.todoFullStack.todo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<Todo, Long>{
    
    public List<Todo> findByUsername(String username);
}
