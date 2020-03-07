import React, {useState} from 'react';

import Intro from './main_questions/Intro'

const questionMapping = {
  Intro
}

export default function App () {

  const [question, setQuestion] = useState('Intro');
  const [questionData, setQuestionData] = useState({
    name: ''
  })

  const updateResponse = (path, value) => {
    setQuestionData({
      ...questionData,
      [path]: value
    })
  }
  
  const Component = questionMapping[question];

  console.table(questionData)
  
  return (
    <Component 
      setQuestion={setQuestion}
      updateResponse={updateResponse}
      responses={questionData}
    />
  )
}
