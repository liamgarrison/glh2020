import React, {useState} from 'react';
import {set} from 'lodash';
import mainQuestions from './main_questions';
import QuestionCard from './misc/QuestionCard';
import finaliseQuestionnaire from '../actions/finalise_questionnaire';

export default function App () {

  const [question, setQuestion] = useState('Intro');
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

  const onComplete = () => {
    return finaliseQuestionnaire(questionData);
  };
  
  const Component = mainQuestions[question];

  console.log(questionData);
  
  return (
    <QuestionCard>
      <Component 
        setQuestion={setQuestion}
        updateResponse={updateResponse}
        responses={questionData}
        onComplete={onComplete}
      />
    </QuestionCard>
  );
}
