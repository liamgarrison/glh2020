import React from 'react';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Questionnaire from './Questionnaire'
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

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
      <Questionnaire />
    </ThemeProvider>

  )
}
