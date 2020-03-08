import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';
import ExplanatoryNote from '../misc/ExplanatoryNote';

export default function Question({setQuestion}) {

  const handleYes = () => {
  };

  const handleNo = () => {
    setQuestion('Final');
  };

  return (
    <Box>
      <QuestionTitle text="Has the damage caused personal injury to you or others"/>
      <ExplanatoryNote text="If you have a minor medical condition which is caused or exacerbated by conditions within the property, you can claim compensation through this process.
        For example, suffering with breathing difficulties or asthma as a result of living in a damp or mould affected property would fall within the scope. Personal injury claims attached to housing disrepair must be proved by a GP’s letter."
      mb={4}/>
      <Box display="flex" justifyContent="space-around">
        <Button variant="contained" color="primary" onClick={handleNo} size="large">
          No
        </Button>
        <Button variant="contained" color="primary" onClick={handleYes} size="large">
          Yes
        </Button>
      </Box>
    </Box>
  );
}

