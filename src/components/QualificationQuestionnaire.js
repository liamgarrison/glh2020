import React, {useState} from 'react';
import qualificationQuestions from './qualification_questions';
import QuestionCard from './misc/QuestionCard';

export default function QualificationQuestionnaire ({onComplete}) {

  const [question, setQuestion] = useState('LiveInEngland');
  
  const Component = qualificationQuestions[question];
  
  return (
    <QuestionCard>
      <Component 
        setQuestion={setQuestion}
        onComplete={onComplete}
      />

    </QuestionCard>
  );
}

