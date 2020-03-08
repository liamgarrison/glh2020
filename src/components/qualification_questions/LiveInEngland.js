import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';
import ExplanatoryNote from '../misc/ExplanatoryNote';

export default function Question({setQuestion}) {

  const handleYes = () => {
    setQuestion('LiveInCouncilHome');
  };

  const handleNo = () => {
    return;
  };

  return (
    <Box>
      <QuestionTitle text="Do you live in England?"/>
      <ExplanatoryNote text="The pre-action protocol only applies to properties located in England."
        mb={4}/>
      <Box display="flex" justifyContent="space-around">
        <Button variant="contained" color="primary" onClick={handleNo} size="large">
          No, I live outside England
        </Button>
        <Button variant="contained" color="primary" onClick={handleYes} size="large">
          Yes, I live in England
        </Button>
      </Box>
    </Box>
  );
}

