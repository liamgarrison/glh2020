import React, {useState} from 'react';

import LiveInCouncilHome from './questions/LiveInCouncilHome'
import LiveInEngland from './questions/LiveInEngland'
import Details from './questions/Details'

import {Container} from '@material-ui/core';

const questionMapping = {
  LiveInCouncilHome,
  LiveInEngland,
  Details
}

export default function App () {

  const [question, setQuestion] = useState('LiveInEngland');
  const [questionData, setQuestionData] = useState({
    name: ''
  })

  const updateResponse = (path, value) => {
    setQuestionData({
      ...questionData,
      [path]: value
    })
  }
  console.log(question, questionMapping)
  
  const Component = questionMapping[question];

  console.table(questionData)
  
  return (
    <Container maxWidth="sm">
      <Component 
        setQuestion={setQuestion}
        questionData={questionData}
        updateResponse={updateResponse}
        responses={questionData}
      />
    </Container>
  )
}
