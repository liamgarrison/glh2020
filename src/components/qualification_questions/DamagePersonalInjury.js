import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';
import ExplanatoryNote from '../misc/ExplanatoryNote';

export default function Question({onComplete}) {

  return (
    <Box>
      <QuestionTitle text="Has the issue caused any minor health problems?"/>
      <ExplanatoryNote text="For example, if you have found it harder to breathe because of mould, you can claim money through this process. This will need to be supported by your GP."
        mb={4}/>
      <Box display="flex" justifyContent="space-around">
        <Button variant="contained" color="primary" onClick={onComplete} size="large">
          No
        </Button>
        <Button variant="contained" color="primary" size="large">
          Yes
        </Button>
      </Box>
    </Box>
  );
}

