import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';
import {useHistory} from 'react-router-dom';

export default function Question({setQuestion}) {

  const history = useHistory();

  const handleContinue = () => {
    setQuestion('LiveInEngland');
  };

  const handleBack = () => {
    history.push('/');
  };

  return (
    <Box>
      <QuestionTitle text="Getting started"/>
      <Box mb={4}>
        <Typography>Please answer the following yes or no questions to help us understand your situation.</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button color="primary" onClick={handleBack}>
          Return home
        </Button>
        <Button variant="contained" color="primary" onClick={handleContinue}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}

