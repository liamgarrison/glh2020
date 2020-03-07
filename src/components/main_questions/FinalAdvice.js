import React from 'react';
import {Box, Typography} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';
import {addBusinessDays, format} from 'date-fns';

export default function Question() {

  return (
    <Box>
      <QuestionTitle text="Here is some final advice"/>
      <Typography>
        Your landlord needs to reply within 22 business days of sending the letter, which is on:
      </Typography>
      <Typography variant="h4">{format(addBusinessDays(new Date(), 22), 'PPPP')}</Typography>
    </Box>
  );
}

