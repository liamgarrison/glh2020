import React from 'react';
import {Button, Box, Typography} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion}) {

  const handleNo = () => {
    setQuestion('AdditionalDocuments');
  };

  return (
    <Box>
      <QuestionTitle text="Do you need to appoint an expert?"/>
      <Box mb={2}>
        <Typography gutterBottom>
              You may need to appoint a qualified expert to assess the damage, especially when it is serious.  When the damage is minor, an expert may not be needed. In this case, you may be able to use receipts, pictures or videos as evidence.
        </Typography>
        <Typography gutterBottom>
          If they agree to do so, it is common to appoint a joint expert with your landlord. The cost of this will be split evenly between you and them. Alternatively, the landlord could decide to appoint their own expert, which means you will also be required to do so.
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-around">
        <Button variant="contained" color="primary" onClick={handleNo} size="large">
          No, I don't need an expert
        </Button>
        <Button variant="contained" color="primary" size="large">
          Yes, I need an expert
        </Button>
      </Box>
    </Box>
  );
}

