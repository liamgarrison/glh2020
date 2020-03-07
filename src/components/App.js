import React from 'react';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Container} from '@material-ui/core'
import Questionnaire from './Questionnaire'
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Logo from '../images/logo.png';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
    ].join(','),
  },
  spacing: 8,
});

export default function App () {
  
  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <img src={Logo}/>
          <Questionnaire />
        </Container>
    </ThemeProvider>

  )
}
