import React, {useState} from 'react';
import {set} from 'lodash';
import mainQuestions from './main_questions';
import QuestionCard from './misc/QuestionCard';

export default function App () {

  const [question, setQuestion] = useState('HistoryOfEvents');
  const [questionData, setQuestionData] = useState({
    tenant: {
      name: '',
      address1: '',
      address2: '',
      address3: '',
      city: '',
      postcode: '',
    },
    landlord: {
      name: '',
      address1: '',
      address2: '',
      address3: '',
      city: '',
      postcode: ''
    },
    issue: {
      summary: '',
      effects: ''
    },
    history: [],
    defects: [] 
  });

  const updateResponse = (path, value) => {
    setQuestionData(set({
      ...questionData
    }, path, value));
  };
  
  const Component = mainQuestions[question];

  console.log(questionData);
  
  return (
    <QuestionCard>
      <Component 
        setQuestion={setQuestion}
        updateResponse={updateResponse}
        responses={questionData}
      />
    </QuestionCard>
  );
}
