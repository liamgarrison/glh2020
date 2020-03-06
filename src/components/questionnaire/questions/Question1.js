import React from 'react';
import {Button} from '@material-ui/core';

export default function Question1({setQuestionNumber}) {
  

  const onClick = () => {
    setQuestionNumber('QUESTION_2')
  }

  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Primary
    </Button>
  )
}
