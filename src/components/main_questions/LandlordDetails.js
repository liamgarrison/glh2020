import React from 'react';
import {Button, Box, FormGroup, TextField} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion, updateResponse, responses}) {

  const handleContinue = () => {
    setQuestion('DetailsOfIssue');
  };

  const handleBack = () => {
    setQuestion('TenantDetails');
  };

  return (
    <Box>
      <QuestionTitle text="Landlord details"/>
      <Box mb={4}>
        <FormGroup>
          <TextField 
            label="Full Name"
            variant="outlined"
            onChange={e => updateResponse('landlord.name', e.target.value)}
            value={responses.landlord.name}
            margin="normal"
          />
          <TextField 
            label="Address 1"
            variant="outlined"
            onChange={e => updateResponse('landlord.address1', e.target.value)}
            value={responses.landlord.address1}
            margin="normal"
          />
          <TextField 
            label="Address 2"
            variant="outlined"
            onChange={e => updateResponse('landlord.address2', e.target.value)}
            value={responses.landlord.address2}
            margin="normal"
          />
          <TextField 
            label="Address 3"
            variant="outlined"
            onChange={e => updateResponse('landlord.address3', e.target.value)}
            value={responses.landlord.address3}
            margin="normal"
          />
          <TextField 
            label="City"
            variant="outlined"
            onChange={e => updateResponse('landlord.city', e.target.value)}
            value={responses.landlord.city}
            margin="normal"
          />
          <TextField 
            label="Postcode"
            variant="outlined"
            onChange={e => updateResponse('landlord.postcode', e.target.value)}
            value={responses.landlord.postcode}
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

