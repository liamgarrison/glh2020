import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion}) {

  const handleYes = () => {
  };

  const handleNo = () => {
    setQuestion('Final');
  };

  return (
    <Box>
      <QuestionTitle text="Has the damage caused personal injury to you or others"/>
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

