package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.LoginCredentials;
import com.example.demo.service.PasswordQualityService;
import com.example.demo.service.EmailValidationService;
import com.example.demo.model.QuizQuestion;
import com.example.demo.service.QuizService;

import java.util.List; 



@Controller 
public class HomeController {

  private final EmailValidationService emailValidationService = new EmailValidationService();
  private final PasswordQualityService passwordQualityService = new PasswordQualityService();
  private final QuizService quizService = new QuizService();

  @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("loginCredentials", new LoginCredentials());
        model.addAttribute("emailok", true); // Add this line
        model.addAttribute("passwordok", true); // And this line
        return "home";
    }

  @PostMapping("/login")
  public String login(@ModelAttribute LoginCredentials loginCredentials, Model model) {
      boolean emailValid = emailValidationService.isValidEmail(loginCredentials.getEmail());
      boolean passwordStrong = passwordQualityService.isStrongPassword(loginCredentials.getPassword());

      if (emailValid && passwordStrong) {
        return "redirect:https://ttt21001-vm.cse.uconn.edu/proxy/8092/not_home";  // Redirect if both are valid
      } else {
        // Stay on the same page and display validation messages
        model.addAttribute("emailok", emailValid);
        model.addAttribute("passwordok", passwordStrong);
        model.addAttribute("loginCredentials", loginCredentials);
        return "home";
    }
  }


  @GetMapping("/not_home")
  public String notHome() {
    return "not_home";
  }

  @GetMapping("/getQuestions")
    @ResponseBody
    public List<QuizQuestion> getQuizQuestions(@RequestParam String topic) {
        return quizService.getQuestionsForTopic(topic);
    }

  @GetMapping("/test")
    public String testPage(@RequestParam(required = false) String topic, Model model) {
        if (topic != null && !topic.isEmpty()) {
            List<QuizQuestion> questions = quizService.getQuestionsForTopic(topic);
            model.addAttribute("questions", questions);
        }
        return "test";
    }



}