import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';
import ExplanatoryNote from '../misc/ExplanatoryNote';

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
      <ExplanatoryNote text="If the property is council-owned, you may be able to receive additional help."
        mb={4}/>
      <Box display="flex" justifyContent="space-around">
        <Button variant="contained" color="primary" onClick={handleNo} size="large">
          No, I'm a private tenant
        </Button>
        <Button variant="contained" color="primary" onClick={handleYes} size="large">
          Yes, I live in a council home
        </Button>
      </Box>
    </Box>
  );
}

