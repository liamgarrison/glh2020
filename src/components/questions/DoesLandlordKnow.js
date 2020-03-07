import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';

export default function Question({setQuestion}) {

  const handleYes = () => {
    setQuestion('HasLandlordStartedProceedings')
  }
  
  const handleNo = () => {
    setQuestion('PleaseContactLandlord')
  }

  return (
    <Box>
      <Typography variant="h2">Does the landlord know about the disrepair?</Typography>
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

