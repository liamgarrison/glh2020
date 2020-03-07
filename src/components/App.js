import React, {useState} from 'react';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Container, Box} from '@material-ui/core';
import QualificationQuestionnaire from './QualificationQuestionnaire';
import MainQuestionnaire from './MainQuestionnaire';
import Header from './misc/Header';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';

const theme = createMuiTheme({
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
    ].join(','),
  },
  spacing: 8,
  shadows: [
    'none',
    '0 3px 4px 0 rgba(0, 0, 0, 0.07), 0 3px 3px -2px rgba(0, 0, 0, 0.06), 0 1px 8px 0 rgba(0, 0, 0, 0.1)'
  ]
});

export default function App () {

  const [questionnaire, setQuestionnaire] = useState('QualificationQuestionnaire');
  // const [questionnaire, setQuestionnaire] = useState('MainQuestionnaire');

  const onCompleteQualificationQuestionnaire = () => {
    setQuestionnaire('MainQuestionnaire');
  };

  const onCompleteMainQuestionnaire = () => {
    alert('Done!');
  };
  
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box bgcolor="#cef0ff" minHeight="100vh" pb={8}>
          <Header/>
          <Container maxWidth="sm">
            {questionnaire === 'QualificationQuestionnaire' && (
              <QualificationQuestionnaire onComplete={onCompleteQualificationQuestionnaire} />
            )}
            {questionnaire === 'MainQuestionnaire' && (
              <MainQuestionnaire onComplete={onCompleteMainQuestionnaire} />
            )}
          </Container>
        </Box>
      </MuiPickersUtilsProvider>
    </ThemeProvider>

  );
}
