import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';
import ExplanatoryNote from '../misc/ExplanatoryNote';

export default function Question({setQuestion}) {

  const handleYes = () => {
    setQuestion('HasLandlordStartedProceedings');
  };

  return (
    <Box>
      <QuestionTitle text="Does the landlord know about the issue?"/>
      <ExplanatoryNote text="If your landlord is currently unaware of the problems at the property, you should let them know before continuing."
        mb={4}/>
      <Box display="flex" justifyContent="space-around">
        <Button variant="contained" color="primary" size="large">
          No
        </Button>
        <Button variant="contained" color="primary" onClick={handleYes} size="large">
          Yes, I have told the landlord
        </Button>
      </Box>
    </Box>
  );
}

