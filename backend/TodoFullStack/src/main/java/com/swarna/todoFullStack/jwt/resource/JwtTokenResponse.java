package com.swarna.todoFullStack.jwt.resource;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Builder
public class JwtTokenResponse implements Serializable {

	private static final long serialVersionUID = 8317676219297719109L;
	private final String token;
}