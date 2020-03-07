import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

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
      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={handleNo}>
          No
        </Button>
        <Button variant="contained" color="secondary" onClick={handleYes}>
          Yes
        </Button>
      </Box>
    </Box>
  );
}

