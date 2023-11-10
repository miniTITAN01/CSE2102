package com.example.demo.model;

import java.util.UUID;
import java.util.List;
import java.util.ArrayList;



public class QuestionBank {

    public static List<Question> questionList = new ArrayList();

    public QuestionBank() {
        questionList.add(new Question("Two + two = 5", false));
        questionList.add(new Question("11 is prime", true));
        questionList.add(new Question("1729 is prime", false));
    }
        
    

    public static Question getQuestion(int i) {
        return questionList.get(i);
    }
}