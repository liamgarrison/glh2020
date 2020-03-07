import React from 'react';
import {Box} from '@material-ui/core';

export default function QuestionCard ({children}) {
  return (
    <Box boxShadow={1} p={6} borderRadius={16} bgcolor="white">
      {children}
    </Box>
  );
}
