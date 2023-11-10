package com.example.demo;

import static org.hamcrest.Matchers.containsString;

import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import org.springframework.boot.test.mock.mockito.MockBean;
import com.example.demo.service.EmailValidationService;
import com.example.demo.service.PasswordQualityService;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;

@WebMvcTest(HomeController.class)   // <1>
public class HomeControllerTest {

  @Autowired
  private MockMvc mockMvc;   // 

  // Mock the dependencies
    @MockBean
    private EmailValidationService emailValidationService;

    @MockBean
    private PasswordQualityService passwordQualityService;


  @Test
    public void testHomePage() throws Exception {
        mockMvc.perform(get("/"))
                .andExpect(status().isOk()) 
                .andExpect(view().name("home"))
                .andExpect(content().string(       
                    containsString("WELCOME TO OUR QUIZ SYSTEM DEMO!!")));
    }
  @Test
    public void testLoginEndpointSuccess() throws Exception {
      given(emailValidationService.isValidEmail("user@example.com")).willReturn(true);
      given(passwordQualityService.isStrongPassword("strongpassword123")).willReturn(true);

        mockMvc.perform(post("/login")
                .param("email", "user@example.com")
                .param("password", "strongpassword123"))
                .andExpect(status().isOk()) ;
    }

    @Test
    public void testLoginEndpointFailure() throws Exception {
      given(emailValidationService.isValidEmail("userexample.com")).willReturn(false);
      given(passwordQualityService.isStrongPassword("weak")).willReturn(false);

        mockMvc.perform(post("/login")
                .param("email", "userexample.com")
                .param("password", "weak"))
                .andExpect(status().isOk())
                .andExpect(view().name("home"))
                .andExpect(model().attribute("emailok", false))
                .andExpect(model().attribute("passwordok", false));
    }

  
  @Test
  public void testNotHomePage() throws Exception {
    mockMvc.perform(get("/not_home"))   
      .andExpect(status().isOk()) 
      .andExpect(view().name("not_home"))
      .andExpect(content().string(       
          containsString("Topic Selection")));
  }

  @Test
  public void testSelectMathTopic() throws Exception {
      mockMvc.perform(get("/test?topic=Math"))
      .andExpect(status().isOk())
      .andExpect(view().name("test"))
      .andExpect(content().string(
            containsString("Demo Question Lists:")));
    }


  @Test
  public void testPage() throws Exception {
    mockMvc.perform(get("/test"))   
      .andExpect(status().isOk()) 
      .andExpect(view().name("test"))
      .andExpect(content().string(       
          containsString("Quiz Page")));
  }


}

