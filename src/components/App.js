import React from 'react';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';
import Header from './misc/Header';
import MomentUtils from '@date-io/moment';
// import 'date-fns';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Questionnaire from './Questionnaire';
import "moment/locale/en-gb";
import moment from 'moment';
moment.locale("en-gb"); // it is required to select default locale manually


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Arial",
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: 40,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 26,
      lineHeight: 1.5
    },
    h4: {
      fontSize: 22,
    },
    h5: {
      fontSize: 18,
    },
  },
  spacing: 8,
  shadows: [
    'none',
    '0px 0px 25px 0px rgba(0,0,0,0.1)'
  ],
  overrides: {
    MuiTypography: {
      gutterBottom: {
        marginBottom: '1.6em'
      }
    },
  },
});

export default function App () {
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} locale={'en-gb'}>
          <Box minHeight="100vh" display="flex" flexDirection="column">
            <Header/>
            <Switch>
              <Route path="/questionnaire">
                <Questionnaire/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Box>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Router>
  );
}
