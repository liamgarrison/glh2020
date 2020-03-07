import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';

export default function Question1({setQuestion}) {

  const handleYes = () => {
    setQuestion('Details')
  }

  const handleNo = () => {
    return
  }

  return (
    <Box>
      <Typography variant="h2">Do you live in a council home?</Typography>
      <Box>
        <Button variant="contained" color="secondary" onClick={handleNo}>
          No
        </Button>
        <Button variant="contained" color="secondary" onClick={handleYes}>
          Yes
        </Button>
      </Box>
    </Box>
  )
}

