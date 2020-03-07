import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';

export default function Question({onComplete}) {

  return (
    <Box>
      <Typography variant="h2">We have determined that you need to do the pre action protocol</Typography>
      <Box>
        <Button variant="contained" color="secondary" onClick={onComplete}>
          Continue
        </Button>
      </Box>
    </Box>
  )
}

