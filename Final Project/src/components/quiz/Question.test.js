// getQuestionsForTopic.test.js
import getQuestionsForTopic from './Question';

describe('getQuestionsForTopic', () => {
  test('returns Language questions for Language topic', () => {
    const questions = getQuestionsForTopic('Language');
    expect(questions).toBeInstanceOf(Array);
    expect(questions.length).toBeGreaterThan(0); // Assuming you have at least one question
    expect(questions[0]).toHaveProperty('questionText');
    expect(questions[0]).toHaveProperty('options');
    expect(questions[0]).toHaveProperty('correctAnswer');
  });

  test('returns Math questions for Math topic', () => {
    const questions = getQuestionsForTopic('Math');
    expect(questions).toBeInstanceOf(Array);
    expect(questions.length).toBeGreaterThan(0);
    // More assertions as needed
  });

  test('returns Chemistry questions for Chemistry topic', () => {
    const questions = getQuestionsForTopic('Chemistry');
    expect(questions).toBeInstanceOf(Array);
    expect(questions.length).toBeGreaterThan(0);
    // More assertions as needed
  });

  test('returns Biology questions for Biology topic', () => {
    const questions = getQuestionsForTopic('Biology');
    expect(questions).toBeInstanceOf(Array);
    expect(questions.length).toBeGreaterThan(0);
    // More assertions as needed
  });

  test('returns an empty array for an unknown topic', () => {
    const questions = getQuestionsForTopic('Unknown');
    expect(questions).toBeInstanceOf(Array);
    expect(questions.length).toBe(0);
  });
});
