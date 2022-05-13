package com.swarna.todoFullStack.hello;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HelloWorldBean {

	public String message;

//	public HelloWorldBean(String message) {
//		this.message = message;
//	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}

}
