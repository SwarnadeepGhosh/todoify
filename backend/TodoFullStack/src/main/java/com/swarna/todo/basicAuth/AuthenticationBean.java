package com.swarna.todo.basicAuth;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthenticationBean {
	public String message;

	// @Override
	// public String toString() {
	// 	return "HelloWorldBean [message=" + message + "]";
	// }
}
