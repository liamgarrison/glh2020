import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion}) {

  const handleNo = () => {
    setQuestion('DamagePersonalInjury');
  };

  return (
    <Box>
      <QuestionTitle text="Has the landlord started proceedings?"/>
      <Typography>This will be true if you have received a letter of claim from the landlord</Typography>
      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={handleNo}>
         No
        </Button>
        <Button variant="contained" color="secondary">
         Yes
        </Button>
      </Box>
    </Box>
  );
}

