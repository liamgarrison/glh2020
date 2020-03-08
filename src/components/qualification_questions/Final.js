import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({onComplete, setQuestion}) {

  const onRestart = () => {
    setQuestion('Intro');
  };

  return (
    <Box>
      <QuestionTitle text="Thank you for answering those questions"/>
      <Box mb={5}>
        <Typography>You meet the criteria to proceed to the next step. We can now help you generate your letter.</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button color="primary" onClick={onRestart}>
          Retake screening questions
        </Button>
        <Button variant="contained" color="primary" onClick={onComplete}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}

