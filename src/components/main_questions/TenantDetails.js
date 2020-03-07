import React from 'react';
import {Button, Box, FormGroup, TextField} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion, updateResponse, responses}) {

  const handleContinue = () => {
    setQuestion('LandlordDetails');
  };

  return (
    <Box>
      <QuestionTitle text="Tenant details"/>
      <Box mb={4}>
        <FormGroup>
          <TextField 
            label="Full Name"
            variant="outlined"
            onChange={e => updateResponse('tenant.name', e.target.value)}
            value={responses.tenant.name}
            margin="normal"
          />
          <TextField 
            label="Address 1"
            variant="outlined"
            onChange={e => updateResponse('tenant.address1', e.target.value)}
            value={responses.tenant.address1}
            margin="normal"
          />
          <TextField 
            label="Address 2"
            variant="outlined"
            onChange={e => updateResponse('tenant.address2', e.target.value)}
            value={responses.tenant.address2}
            margin="normal"
          />
          <TextField 
            label="Address 3"
            variant="outlined"
            onChange={e => updateResponse('tenant.address3', e.target.value)}
            value={responses.tenant.address3}
            margin="normal"
          />
          <TextField 
            label="City"
            variant="outlined"
            onChange={e => updateResponse('tenant.city', e.target.value)}
            value={responses.tenant.city}
            margin="normal"
          />
          <TextField 
            label="Postcode"
            variant="outlined"
            onChange={e => updateResponse('tenant.postcode', e.target.value)}
            value={responses.tenant.postcode}
            margin="normal"
          />
        </FormGroup>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" color="secondary" onClick={handleContinue}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}

