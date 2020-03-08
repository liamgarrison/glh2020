import React from 'react';
import {Container, Typography, Box, Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../images/background.jpg'; // Import using relative path

const useStyles = makeStyles({
  image: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover'
  },
  white: {
    color: 'white'
  },
  dark: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
});

export default function Home () {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Box flexGrow={1}  className={classes.image} display="flex">
      <Box flexGrow={1}  className={classes.dark}>
        <Container maxWidth="md">
          <Box py={24}>
            <Typography gutterBottom variant="h1" className={classes.white} >Resolve disrepair disputes with your landlord now</Typography>
            <Typography gutterBottom variant="h3" className={classes.white} >Our easy-to-use questionnaire helps you navigate the legal process that needs to be followed before filing a claim.</Typography>
            <Button variant="contained" color="primary" onClick={() => history.push('/questionnaire')} size="large">
              Get started
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
