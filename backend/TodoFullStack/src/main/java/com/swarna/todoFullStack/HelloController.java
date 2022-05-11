package com.swarna.todoFullStack;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200") // Allowing localhost:4200 so that backend can be called by frontend
												// server
@RestController
public class HelloController {

	@GetMapping("hello")
	public String helloWorld() {
		return "Hello world";
	}

	@GetMapping("hello-bean") // Bean is converting into JSON and send to view.
	public HelloWorldBean helloWorldBean() {
		// throw new RuntimeException("Some error occurred. Please contact helpdesk.");
		return new HelloWorldBean("Hello World from HelloWorldBean backend"); 
	}

	@GetMapping(value="hello/path-variable/{name}")
	public HelloWorldBean helloWorldBeanWithPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World from Path Variable, Username : %s", name));
	}
	
}
