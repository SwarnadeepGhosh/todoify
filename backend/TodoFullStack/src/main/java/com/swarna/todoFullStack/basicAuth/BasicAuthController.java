package com.swarna.todoFullStack.basicAuth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200") // Allowing localhost:4200 so that backend can be called by frontend server
@RestController
public class BasicAuthController {

	@GetMapping("/basicauth") // Bean is converting into JSON and send to view.
	public AuthenticationBean helloWorldBean() {
		// throw new RuntimeException("Some error occurred. Please contact helpdesk.");
		return new AuthenticationBean("You are authenticated"); 
	}

}
