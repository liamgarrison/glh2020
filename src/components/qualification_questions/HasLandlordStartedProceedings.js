import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';
import ExplanatoryNote from '../misc/ExplanatoryNote';

export default function Question({setQuestion}) {

  const handleNo = () => {
    setQuestion('DamagePersonalInjury');
  };

  return (
    <Box>
      <QuestionTitle text="Has the landlord sent you a letter mentioning going to court?"/>
      <ExplanatoryNote text="This is often referred to as a letter of claim. Its purpose is to inform you that legal action may be brought against you." mb={4}/>
      <Box display="flex" justifyContent="space-around">
        <Button variant="contained" color="primary" onClick={handleNo} size="large">
         No
        </Button>
        <Button variant="contained" color="primary" size="large">
         Yes
        </Button>
      </Box>
    </Box>
  );
}

