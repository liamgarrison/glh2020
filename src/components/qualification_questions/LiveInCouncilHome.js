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
      <Box display="flex" justifyContent="space-around">
        <Button variant="contained" color="primary" onClick={handleNo} size="large">
          No
        </Button>
        <Button variant="contained" color="primary" onClick={handleYes} size="large">
          Yes
        </Button>
      </Box>
    </Box>
  );
}

