import React from 'react';
import {Button, Box} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';
import ExplanatoryNote from '../misc/ExplanatoryNote';

export default function Question({setQuestion}) {

  const handleNo = () => {
    setQuestion('DamagePersonalInjury');
  };

  return (
    <Box>
      <QuestionTitle text="Has the landlord started proceedings?"/>
      <ExplanatoryNote text="This will be when the landlord has sent you a letter of claim. This is a letter that officially puts you on notice that court proceedings may be brought against you." mb={4}/>
      <Box display="flex" justifyContent="space-around">
        <Button variant="contained" color="primary" onClick={handleNo} size="large">
         No
        </Button>
        <Button variant="contained" color="primary" size="large">
         Yes
        </Button>
      </Box>
    </Box>
  );
}

