import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';
import ExplanatoryNote from '../misc/ExplanatoryNote';

export default function Question({setQuestion}) {

  const handleYes = () => {
    setQuestion('DoesLandlordKnow');
  };

  return (
    <Box>
      <QuestionTitle text="Would the damage cost more than £250 to repair?"/>
      <ExplanatoryNote text="This is a rough estimate of how much it will cost for the disrepair to be fixed." mb={4}/>
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

