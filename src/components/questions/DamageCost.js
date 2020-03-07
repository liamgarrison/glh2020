import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';

export default function Question({setQuestion}) {

  const handleYes = () => {
    setQuestion('DoesLandlordKnow')
  }

  const handleNo = () => {
    setQuestion('RightToRepair')
  }

  return (
    <Box>
      <Typography variant="h2">Would the damage cost more than £250 to repair?</Typography>
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

