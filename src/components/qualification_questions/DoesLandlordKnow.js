import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion}) {

  const handleYes = () => {
    setQuestion('HasLandlordStartedProceedings');
  };

  return (
    <Box>
      <QuestionTitle text="Does the landlord know about the disrepair?"/>
      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary">
          No
        </Button>
        <Button variant="contained" color="secondary" onClick={handleYes}>
          Yes
        </Button>
      </Box>
    </Box>
  );
}

