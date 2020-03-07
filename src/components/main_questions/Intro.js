import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion}) {

  const handleContinue = () => {
    setQuestion('TenantDetails');
  };

  return (
    <Box>
      <QuestionTitle text="Bit of background"/>
      <Typography>Explainer text about the process here</Typography>
      <Box>
        <Button variant="contained" color="secondary" onClick={handleContinue}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}

