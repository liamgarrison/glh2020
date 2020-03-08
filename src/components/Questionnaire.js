import {Container, Box} from '@material-ui/core';
import QualificationQuestionnaire from './QualificationQuestionnaire';
import MainQuestionnaire from './MainQuestionnaire';
import React, {useState} from 'react';

export default function Questionnaire () {


  const [questionnaire, setQuestionnaire] = useState('QualificationQuestionnaire');
  // const [questionnaire, setQuestionnaire] = useState('MainQuestionnaire');

  const onCompleteQualificationQuestionnaire = () => {
    setQuestionnaire('MainQuestionnaire');
  };

  const onCompleteMainQuestionnaire = () => {
    alert('Done!');
  };
  return (
    <Box py={8} flexGrow={1} bgcolor="#cef0ff">
      <Container maxWidth="md">
        {questionnaire === 'QualificationQuestionnaire' && (
          <QualificationQuestionnaire onComplete={onCompleteQualificationQuestionnaire} />
        )}
        {questionnaire === 'MainQuestionnaire' && (
          <MainQuestionnaire onComplete={onCompleteMainQuestionnaire} />
        )}
      </Container>
    </Box>
  );
}
