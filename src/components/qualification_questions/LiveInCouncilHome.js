import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion}) {

  const handleYes = () => {
    setQuestion('DamageCost');
  };

  const handleNo = () => {
    setQuestion('DoesLandlordKnow');
  };

  return (
    <Box>
      <QuestionTitle text="Do you live in a council home?"/>
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

