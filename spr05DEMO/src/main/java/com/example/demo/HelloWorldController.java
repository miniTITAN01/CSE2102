package com.example.demo;

import java.util.UUID;

import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.model.Question;
import com.example.demo.model.QuestionBank;
import com.example.demo.model.Answer;

@RestController
public class HelloWorldController {

	private final AtomicLong counter = new AtomicLong();
	private static int basic_counter = 0;

	@GetMapping("/hello")
	public HelloWorld hello(@RequestParam(value = "content", defaultValue = "GET endpoint") String content) {
		return new HelloWorld(counter.incrementAndGet(), content);
	}

	@GetMapping("/uuid")
	public MyUuid getUuid() {
		UUID uuid = UUID.randomUUID();
		return new MyUuid(uuid);
	}

	@GetMapping("/question")
	public Question getQuestion(){
		return new QuestionBank().getQuestion(basic_counter++);
	}


	@PostMapping(path="/password_len")
  	@ResponseStatus(HttpStatus.OK)
	public Password paasswordLength(@RequestParam(value = "pwd") String pwd) {
		int pwd_len = pwd.length();
		return new Password(pwd_len, pwd);
	}

	@PostMapping(path="/say_hi_back", consumes="application/json")
  	@ResponseStatus(HttpStatus.CREATED)
	public HelloWorld sayhi(@RequestParam(value = "content", defaultValue = "Enjoy your day!") String content) {
		return new HelloWorld(counter.incrementAndGet(), content);
	}
}