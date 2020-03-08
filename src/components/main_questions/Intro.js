import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion}) {

  const handleContinue = () => {
    setQuestion('TenantDetails');
  };

  return (
    <Box>
      <QuestionTitle text="Introduction"/>
      <Box mb={5}>
        <Typography gutterBottom>We will now go through some questions to populate a letter that you can send to your landlord.</Typography>
        <Typography gutterBottom>This letter is required by the protocol and can then lead to you starting alternative dispute resolution / court proceedings if the issue does not get resolved.</Typography>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={handleContinue}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}

