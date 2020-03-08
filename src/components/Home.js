import React from 'react';
import {Container, Typography, Box, Button, Link} from '@material-ui/core';
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
  },
  bold: {
    fontWeight: 'bold'
  }
});

export default function Home () {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <Box className={classes.image} display="flex">
        <Box flexGrow={1} className={classes.dark}>
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
      <Box py={8}>
        <Container maxWidth="md">
          <Box pb={4}>

            <Typography variant="h2" gutterBottom>
            About Tenant Action
            </Typography>
            <Typography variant="h3">
          What is it for?

            </Typography>
            <Typography gutterBottom>
          Tenant Action is a platform that helps you when you have damage to your property and your landlord has not repaired it or refuses to do so. It helps you through the steps you need to go through before filing a legal claim against your landlord and offer you guidance on the steps that follow.  
            </Typography>
            <Typography variant="h3">
          Why do you have to follow specific steps? 

            </Typography>
            <Typography gutterBottom>
            These steps are based on legal guidance that shows what a court would expect you to have gone through before you start legal proceedings.  
            </Typography>
            <Typography gutterBottom>
          These steps are contained in a <Link target="_blank" rel="noopener noreferrer" href="https://www.justice.gov.uk/courts/procedure-rules/civil/protocol/prot_hou">pre-action protocol</Link> for housing conditions claims. By answering a few simple questions, we will confirm whether you need to follow this process or if a different process is more appropriate.  
 
            </Typography>
            <Typography gutterBottom>
 If these steps are not followed, the court has the power to make you pay legal costs that you could have otherwise recovered or the legal costs of the landlord. The court could also impose other sanctions, it has a wide set of powers.  
            </Typography>
            <Typography gutterBottom>
 In order to benefit from process, you need to be the tenant, lessees or a member of the tenant’s family living in the property. 
 
            </Typography>
            <Typography variant="h3">
          What is disrepair? 

            </Typography>
            <Typography gutterBottom>
          This protocol applies where the living conditions of your home has deteriorated or changed negatively compared to when you moved in.  
            </Typography>
            <Typography gutterBottom>
 This includes physical damage and deterioration but can be much wider. It can be an infestation, mould problems, a broken boiler, plumbing or gutter issues. Anything that would affect your ability to live normally in your home.  
            </Typography>
            <Typography gutterBottom>
  Once informed of any disrepair, your landlord is obliged to carry out repairs within a reasonable period. If your landlord fails to fix the problem, you may need to take further action. 
 
            </Typography>
            <Typography variant="h3">
          Your rights

            </Typography>
            <Typography gutterBottom>
          You can read more about your rights here:  
            </Typography>
            <Typography>
              <Link target="_blank" rel="noopener noreferrer" href="http://england.shelter.org.uk/get_advice/repairs_and_bad_conditions">Shelter</Link>
            
            </Typography>
            <Typography>

              <Link target="_blank" rel="noopener noreferrer" href="https://www.citizensadvice.org.uk/housing/repairs-in-rented-housing">Citizens Advice</Link>
            </Typography>
            <Typography>

              <Link target="_blank" rel="noopener noreferrer" href="https://www.lawcentres.org.uk/ ">Law Centres Network</Link>
            </Typography>
            <Typography>

              <Link target="_blank" rel="noopener noreferrer" href="https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service">Courts and Tribunals Service</Link>
            </Typography>

          </Box>
          <Box>
            <Typography variant="h3">
              Get started

            </Typography>
            <Typography gutterBottom>
              Take our short questionnaire to see if this is the right process for you. If successful, our tool will help you generate the documents needed to send to your landlord.
 
            </Typography>
            <Button variant="contained" color="primary" onClick={() => history.push('/questionnaire')} size="large">
                Start Questionnaire
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
