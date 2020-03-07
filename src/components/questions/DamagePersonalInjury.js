import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';

export default function Question() {

  const handleYes = () => {
  }

  const handleNo = () => {
  }

  return (
    <Box>
      <Typography variant="h2">Has the damage caused personal injury to you or others</Typography>
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

