import React from 'react';
import {Button, Box, FormGroup, TextField, Typography} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion, updateResponse, responses}) {

  const handleContinue = () => {
    setQuestion('HistoryOfEvents');
  };

  const handleBack = () => {
    setQuestion('LandlordDetails');
  };

  return (
    <Box>
      <QuestionTitle text="Issue details"/>
      <Box mb={2}>
        <Typography>
          Please provide a summary of the issues that are present at the property. In the next section you will have the opportunity to provide specific details.
        </Typography>
      </Box>
      <Box mb={4}>
        <FormGroup>
          <TextField 
            label="Briefly summarise the issue"
            multiline={true}
            rows="4"
            variant="outlined"
            onChange={e => updateResponse('issue.summary', e.target.value)}
            value={responses.issue.summary}
            margin="normal"
            helperText="200 character limit"
          />
          <TextField 
            label="Briefly explain what effects the issue has had on you"
            variant="outlined"
            multiline={true}
            rows="4"
            onChange={e => updateResponse('issue.effects', e.target.value)}
            value={responses.issue.effects}
            margin="normal"
            helperText="200 character limit"
          />
        </FormGroup>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button color="primary" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleContinue}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}

