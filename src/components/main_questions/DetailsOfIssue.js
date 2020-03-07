import React from 'react';
import {Button, Box, FormGroup, TextField} from '@material-ui/core';
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
      <QuestionTitle text="Details of your issue"/>
      <Box mb={4}>
        <FormGroup>
          <TextField 
            label="Briefly summarise the issue (200 characters)"
            multiline={true}
            rows="4"
            variant="outlined"
            onChange={e => updateResponse('issue.summary', e.target.value)}
            value={responses.issue.summary}
            margin="normal"
          />
          <TextField 
            label="Briefly explain what effects the issue has had on you (200 characters)"
            variant="outlined"
            multiline={true}
            rows="4"
            onChange={e => updateResponse('issue.effects', e.target.value)}
            value={responses.issue.effects}
            margin="normal"
          />
        </FormGroup>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="secondary" onClick={handleContinue}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}

