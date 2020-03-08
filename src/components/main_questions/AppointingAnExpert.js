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
              In most cases you will need to appoint an expert to provide evidence of the disrepair, especially where it is serious.  
        </Typography>
        <Typography gutterBottom>
            Where it is not, an expert may not be needed, and it may be enough to rely on receipts, pictures and videos. 
        </Typography>
        <Typography gutterBottom>
            At this stage it is common to suggest appointing a joint expert which means that the expert will give evidence on yours and the landlord’s behalf. The benefit is that the cost will be split equally.  
        </Typography>
        <Typography gutterBottom>
        The landlord could decide to appoint their own expert, in which case you will be solely responsible for the costs of your expert.
        </Typography>
      </Box>
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

