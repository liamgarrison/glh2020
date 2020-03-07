import React from 'react';
import {Button, TextField, Box, FormGroup, Typography} from '@material-ui/core';

export default function Question({setQuestion, updateResponse, responses}) {

  const handleNext = () => {
  }

  const handlePrevious = () => {
    setQuestion('LiveInCouncilHome')
  }

  return (
    <>
      <Typography variant="h2">Please enter some details</Typography>
      <FormGroup>
        <TextField label="What is your name" variant="outlined" value={responses.name} onChange={e => updateResponse('name', e.target.value)} />
      </FormGroup>
      <FormGroup>

      <TextField label="What is your address" variant="outlined" />
      </FormGroup>
      <FormGroup>


      <TextField label="Do you have any damage" variant="outlined" />
      </FormGroup>
      <Box>
        <Button type="submit" variant="contained" color="secondary" onClick={handlePrevious}>
          Previous
        </Button>
        <Button type="submit" variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </>
  )
}
