import React, {useState} from 'react';

import Question1 from './questions/Question1'
import Question2 from './questions/Question2'

const questionMapping = {
  'QUESTION_1': Question1,
  'QUESTION_2': Question2
}

export default function App () {

  const [questionNumber, setQuestionNumber] = useState('QUESTION_1');

  const Component = questionMapping[questionNumber];
  
  return (
    <div>
      <h1>{questionNumber}</h1>
      <Component setQuestionNumber={setQuestionNumber}/>
    </div>
  )
}
