package com.swarna.todoFullStack.todo;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="TODO_FULLSTACK", schema = "public")
public class Todo {

    @Id
    @SequenceGenerator(name = "todo_seq",sequenceName = "todo_seq",allocationSize = 1, schema = "public")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "todo_seq")
    private Long id;

    private String username;
    private String description;
    private Date targetDate;
    private boolean isDone;
}
