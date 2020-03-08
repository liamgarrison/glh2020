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
      <Box display="flex" justifyContent="space-around">
        <Button variant="contained" color="primary" onClick={handleNo} size="large" >
          No
        </Button>
        <Button variant="contained" color="primary" size="large">
          Yes
        </Button>
      </Box>
    </Box>
  );
}

