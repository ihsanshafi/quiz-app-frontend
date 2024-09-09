'use client';

import { useState } from 'react';
import Button from './btn'; // Assuming the Button component is in the same directory

const QuestionEntry = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [storedQuestions, setStoredQuestions] = useState([]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (question.trim() && answer.trim()) {
      setStoredQuestions([...storedQuestions, { question, answer }]);
      setQuestion('');
      setAnswer('');
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="questionField" className="block text-lg font-semibold mb-2">
          Enter Question:
        </label>
        <input
          type="text"
          id="questionField"
          value={question}
          onChange={handleQuestionChange}
          className="p-2 border rounded w-full text-slate-800"
          placeholder="Type your question..."
        />
      </div>

      <div className="mb-4">
        <label htmlFor="answerField" className="block text-lg font-semibold mb-2">
          Enter Answer:
        </label>
        <input
          type="text"
          id="answerField"
          value={answer}
          onChange={handleAnswerChange}
          className="p-2 border rounded w-full text-slate-800"
          placeholder="Type the answer..."
        />
      </div>

      <Button onClick={handleSubmit}>Add</Button>

      <div className="mt-6"> 
        <h2 className="text-xl font-bold mb-2">Stored Questions and Answers:</h2>
        <ul>
          {storedQuestions.map((item, index) => (
            <li key={index} className="mb-2">
              <strong>Q: {item.question}</strong>
              <br />
              <em>A: {item.answer}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionEntry;