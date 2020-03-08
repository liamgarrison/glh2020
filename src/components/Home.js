import React from 'react';
import {Container, Typography, Box, Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

export default function Home () {
  const history = useHistory();

  return (
    <Container maxWidth="md">
      <Box py={8}>
        <Typography gutterBottom variant="h1">Resolve disrepair disputes with your landlord now</Typography>
        <Typography gutterBottom variant="h3">Our easy-to-use questionnaire helps you generate the documents you need to get things fixed quickly</Typography>
        <Button variant="contained" color="secondary" onClick={() => history.push('/questionnaire')}>
            Get started
        </Button>
      </Box>
    </Container>
  );
}
