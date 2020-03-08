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
      <Box display="flex" justifyContent="space-around">
        <Button variant="contained" color="primary" size="large">
          No
        </Button>
        <Button variant="contained" color="primary" onClick={handleYes} size="large">
          Yes
        </Button>
      </Box>
    </Box>
  );
}

