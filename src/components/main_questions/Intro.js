import React from 'react';
import {Button, Box, Typography, Link} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion, onRestart}) {

  const handleContinue = () => {
    setQuestion('TenantDetails');
  };

  return (
    <Box>
      <QuestionTitle text="Generate a letter to your landlord"/>
      <Box mb={5}>
        <Typography gutterBottom>This letter will contain all the issues that are currently present in the property. Using our template will ensure the information is clearly detailed in the correct format.</Typography>
        <Typography gutterBottom>If your issue needs to go to court or requires <Link target="_blank" rel="noopener noreferrer" href="https://england.shelter.org.uk/legal/housing_options/deposits/statutory_protection_of_deposits/return_of_the_deposit/dispute_resolution">alternative dispute resolution</Link>, this letter is required to show that you have properly informed your landlord about the issues.</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button color="primary" onClick={onRestart}>
          Retake screening questions
        </Button>
        <Button variant="contained" color="primary" onClick={handleContinue}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}

