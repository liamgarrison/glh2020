import React from 'react';
import {Box, Typography, Button, Link} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';
import {addBusinessDays, format} from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bold: {
    fontWeight: 'bold',
  }
});

export default function Question({downloadDocument}) {
  const classes = useStyles();

  const handleClick = async () => {
    await downloadDocument();
  };

  return (
    <Box>
      <QuestionTitle text="Questionnaire completed"/>
      <Typography gutterBottom>
        Thank you for completing the questions. Please check the document has downloaded correctly.
      </Typography>
      <Typography className={classes.bold} gutterBottom>Your landlord has until {format(addBusinessDays(new Date(), 22), 'PPPP')} to reply to your letter.  </Typography>
      <Box mb={4}>
        <Button variant="contained" color="primary" onClick={handleClick}>
            Download again
        </Button>
      </Box>
      <Typography gutterBottom  className={classes.bold}>
        What happens if they reply? 
      </Typography>
      <Typography gutterBottom>

If they reply and agree to pay, great! We hope they do so promptly and this is the end of your dispute. 
      </Typography>
      
      <Typography gutterBottom>

If they do not reply by that date, it doesn’t mean that they have agreed to pay for the disrepair, so you should consider your next steps.  
      </Typography>
    
      <Typography gutterBottom className={classes.bold}>
Alternative dispute resolution options 

      </Typography>
      <Typography gutterBottom>


You may wish to consider alternative dispute resolution options before going to court. These are generally quicker and cheaper.  
      </Typography>
      <Typography gutterBottom>

This can take the form of mediation. Mediation involves appointing an impartial person, a mediator, to help discuss and resolve disputes. Further information about mediation can be found <Link target="_blank" rel="noopener noreferrer" href="http://www.civilmediation.org/contact.php ">here</Link>.
      </Typography>
      <Typography gutterBottom>

If you live in a council home you can also look to the council’s own complaints and/or arbitration procedures. You can also contact the Housing Ombudsman Service which deals with complains from council tenants <Link target="_blank" rel="noopener noreferrer" href="http://www.housing-ombudsman.org.uk/">here</Link>. 
      </Typography>
 
      <Typography gutterBottom>

 
You can find more information on alternative dispute resolution <Link target="_blank" rel="noopener noreferrer" href="https://www.citizensadvice.org.uk/scotland/law-and-courts/legal-system-s/settling-out-of-court/using-alternative-dispute-resolution-to-solve-your-consumer-problem-s/ ">here</Link>.
      </Typography>

      <Typography gutterBottom>

For private tenants, the landlord, the letting agent or the property manager may be a member of a redress scheme enabling unresolved complaints about housing conditions to be independently resolved. 
      </Typography>
      <Typography gutterBottom className={classes.bold}>

Filing a claim
      </Typography>
      <Typography gutterBottom>

You may wish to file a letter of claim that will start legal proceedings. More information on how to do this can be found <Link target="_blank" rel="noopener noreferrer" href="https://www.citizensadvice.org.uk/law-and-courts/legal-system/taking-legal-action/small-claims/making-a-small-claim/">here</Link>.
      </Typography>
 
      <Typography gutterBottom className={classes.bold}>

More information about your rights 
      </Typography>
      <Typography gutterBottom>

Information about repair rights generally is available from <Link target="_blank" rel="noopener noreferrer" href="http://england.shelter.org.uk/get_advice/repairs_and_bad_conditions">Shelter</Link>  and Citizens Advice (<Link target="_blank" rel="noopener noreferrer" href="http://www.citizensadvice.org.uk/housing/repairs-in-rented-housing/ ">general advice</Link>, <Link target="_blank" rel="noopener noreferrer" href="https://www.citizensadvice.org.uk/housing/renting-privately/during-your-tenancy/going-to-court-if-your-landlord-wont-do-repairs/ ">going to court</Link>).

 
      </Typography>
 
      <Typography gutterBottom>

 
If you’re a private tenant you can read <Link target="_blank" rel="noopener noreferrer" href=" https://www.gov.uk/government/publications/landlord-and-tenant-rights-and-responsibilities-in-the-private-rented-sector">this government report</Link> or about the <Link target="_blank" rel="noopener noreferrer" href="https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service ">HM Courts and Tribunals Service</Link>.
 
      </Typography>

      <Typography gutterBottom>

If you’re a social housing tenant there is some further guidance  <Link target="_blank" rel="noopener noreferrer" href="http://www.communities.gov.uk/publications/housing/deliveringhousingadaptations2 ">here</Link>.
      </Typography>

    </Box>
  );
}

