import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion}) {

  const handleNo = () => {
    setQuestion('DownloadDocument');
  };

  return (
    <Box>
      <QuestionTitle text="Do you need to provide additional documents?"/>
      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={handleNo}>
          No
        </Button>
        <Button variant="contained" color="secondary">
          Yes
        </Button>
      </Box>
    </Box>
  );
}

