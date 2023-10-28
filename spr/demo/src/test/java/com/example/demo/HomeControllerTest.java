package com.example.demo;

import static org.hamcrest.Matchers.containsString;

import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(HomeController.class)   // <1>
public class HomeControllerTest {

  @Autowired
  private MockMvc mockMvc;   // 

  @Test
    public void testHomePage() throws Exception {
        mockMvc.perform(get("/"))
                .andExpect(status().isOk()) 
                .andExpect(view().name("home"))
                .andExpect(content().string(       
                    containsString("WELCOME TO OUR QUIZ SYSTEM DEMO!!")));
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

/*
 .andExpect(view().name("not_home"))
      .andExpect(content().string(       
          containsString("Not Home - BLAH Welcome")));
*/

//FIXED
/*.andExpect(view().name("not_home"))
      .andExpect(content().string(       
          containsString("Not Home - Welcome")));*/

//FIXED
/*/*.andExpect(view().name("not_home.html"))
      .andExpect(content().string(       
          containsString("Not Home - BLAH Welcome")));*/
