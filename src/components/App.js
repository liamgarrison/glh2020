import React, {useState} from 'react';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Container} from '@material-ui/core'
import QualificationQuestionnaire from './QualificationQuestionnaire'
import MainQuestionnaire from './MainQuestionnaire'
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

  const [questionnaire, setQuestionnaire] = useState('QualificationQuestionnaire')

  const onCompleteQualificationQuestionnaire = () => {
    setQuestionnaire('MainQuestionnaire')
  }

  const onCompleteMainQuestionnaire = () => {
    alert('Done!')
  }
  
  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <img src={Logo}/>
          {questionnaire === 'QualificationQuestionnaire' && (
            <QualificationQuestionnaire onComplete={onCompleteQualificationQuestionnaire} />
          )}
          {questionnaire === 'MainQuestionnaire' && (
            <MainQuestionnaire onComplete={onCompleteMainQuestionnaire} />
          )}
        </Container>
    </ThemeProvider>

  )
}
