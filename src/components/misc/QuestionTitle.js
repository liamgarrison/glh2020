import React from 'react';
import {Typography, Box} from '@material-ui/core';

export default function QuestionTitle ({text}) {
  return (
    <Box mb={4}>
      <Typography variant="h5" mb={8}>{text}</Typography>
    </Box>
  );
}
