package com.example.demo;

import java.util.Arrays;
import java.util.List;

//import org.springframework.util.Optional;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@Controller 
public class HomeController {

  
  @GetMapping("/")
  public String home() {
    return "home";
  }

  @GetMapping("/not_home")
  public String notHome() {
    return "not_home";
  }

  @GetMapping("/test")
  public String testPage() {
    return "test";
  }

}