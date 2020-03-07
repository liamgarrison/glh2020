import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({onComplete}) {

  return (
    <Box>
      <QuestionTitle text="We have determined that you need to do the pre action protocol"/>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" color="secondary" onClick={onComplete}>
          Continue
        </Button>
      </Box>
    </Box>
  );
}

