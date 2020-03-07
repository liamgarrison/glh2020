import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';

export default function Question({setQuestion}) {

  const handleYes = () => {
    setQuestion('FollowProceedings')
  }

  const handleNo = () => {
    setQuestion('DamagePersonalInjury')
  }

  return (
     <Box>
     <Typography variant="h2">Has the landlord started proceedings?</Typography>
     <Typography>This will be true if you have received a letter of claim from the landlord</Typography>
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

