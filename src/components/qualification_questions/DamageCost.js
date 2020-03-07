import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion}) {

  const handleYes = () => {
    setQuestion('DoesLandlordKnow');
  };

  return (
    <Box>
      <QuestionTitle text="Would the damage cost more than £250 to repair?"/>
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

