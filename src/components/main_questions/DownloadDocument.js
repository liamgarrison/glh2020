import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion, downloadDocument}) {

  const handleClick = async () => {
    await downloadDocument();
    setQuestion('FinalAdvice');
  };

  return (
    <Box>
      <QuestionTitle text="Your document is ready"/>
      <Box mb={2}>
        <Typography>Click download to access your completed letter that you can send to your landlord.</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleClick}>
            Download
        </Button>
      </Box>
    </Box>
  );
}

