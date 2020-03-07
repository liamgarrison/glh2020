import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';

export default function Question({setQuestion}) {

  const handleYes = () => {
    setQuestion('DamageCost')
  }

  const handleNo = () => {
    setQuestion('DoesLandlordKnow')
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

