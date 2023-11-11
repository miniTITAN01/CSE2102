package com.example.demo.service;

import com.example.demo.model.QuizQuestion;
import java.util.ArrayList;
import java.util.List;

public class QuizService {

    public List<QuizQuestion> getQuestionsForTopic(String topic) {
        List<QuizQuestion> questions = new ArrayList<>();
        // Dummy questions based on topic
        // In a real scenario, this data might be fetched from a database or external service
        if ("Math".equals(topic)) {
            questions.add(new QuizQuestion("1. What is 2+2 ?", new String[]{"3 ", "4 ", "5 "}, "4"));
            // add more questions
            questions.add(new QuizQuestion("2. What is 6% equals to ?", new String[]{"0.06 ", "0.6 ", "0.006 "}, "0.06"));

            questions.add(new QuizQuestion("3. How many years are there in a decade ?", 
            new String[]{"5 years", "10 years", "12 years"}, "10 years"));
        }
        // similarly, add questions for other topics
        if ("Science".equals(topic)) {
            questions.add(new QuizQuestion("1. Which animal lays eggs ?", new String[]{"Dog ", "Duck ", "Sheep "}, "Duck"));
            // add more questions
            questions.add(new QuizQuestion("2. What is Earth’s only natural satellite ?", 
            new String[]{"Mars ", "Moon ", "Sun "}, "Moon "));

            questions.add(new QuizQuestion("3. All animals need food, air, and ____ to survive ?", 
            new String[]{"Water ", "House ", "Fruits "}, "Water "));
        }

        if ("History".equals(topic)) {
            questions.add(new QuizQuestion("1. The 19th Amendment guarantees ____ the right to vote ?", 
            new String[]{"Women ", "Men ", "Low-income Citizens "}, "Women"));
            // add more questions
            questions.add(new QuizQuestion("2. Which U.S. President was the first to live in the White House ?", 
            new String[]{"George Washington ", "John Adams ", "Thomas Jefferson "}, "John Adams "));

            questions.add(new QuizQuestion("3. What was the first state to grant women the right to vote ?", 
            new String[]{"New York ", "California ", "Wyoming "}, "Wyoming "));
        }

        if ("Programming".equals(topic)) {
            questions.add(new QuizQuestion("1.  _______ is the process of finding errors and fixing them within a program ?", 
            new String[]{"Compiling ", "Debugging ", "Scanning "}, "Debugging"));
            // add more questions
            questions.add(new QuizQuestion("2. Which command will stop an infinite loop ?", 
            new String[]{"Alt-C ", "Esc ", "Ctrl-C "}, "Ctrl-C "));

            questions.add(new QuizQuestion("3. During program development, software requirements specify ?", 
            new String[]{"How the program will accomplish the task ", 
                         "What the task is that the program must perform ", 
                         "How to test the program when it is done "}, 
                         "What the task is that the program must perform "));
        }

        return questions;
    }
}
