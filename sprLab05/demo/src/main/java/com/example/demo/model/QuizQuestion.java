package com.example.demo.model;

public class QuizQuestion {
    private String question;
    private String[] choices;
    private String answer;

    // Constructor with parameters
    public QuizQuestion(String question, String[] choices, String answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }

    // Getters and setters
    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String[] getChoices() {
        return choices;
    }

    public void setChoices(String[] choices) {
        this.choices = choices;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}
