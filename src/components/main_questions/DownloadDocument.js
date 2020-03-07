import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion, downloadDocument}) {

  const handleClick = async () => {
    await downloadDocument();
    setQuestion('FinalAdvice');
  };

  return (
    <Box>
      <QuestionTitle text="Your document is ready!"/>
      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Download
        </Button>
      </Box>
    </Box>
  );
}

