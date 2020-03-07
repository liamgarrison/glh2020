import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion}) {

  const handleYes = () => {
    setQuestion('FollowProceedings');
  };

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
        <Button variant="contained" color="secondary" onClick={handleYes}>
         Yes
        </Button>
      </Box>
    </Box>
  );
}

