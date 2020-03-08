import React, {useState} from 'react';
import {Button, Box, TextField, Typography, FormGroup} from '@material-ui/core';
import {KeyboardDatePicker} from '@material-ui/pickers';
import QuestionTitle from '../misc/QuestionTitle';
import moment from 'moment';

export default function Question({setQuestion, updateResponse, responses}) {

  const handleBack = () => {
    setQuestion('DetailsOfIssue');
  };

  const handleNext = () => {
    setQuestion('ListOfDefects');
  };

  const emptyEvent = {
    date: new Date(),
    description: ''
  };
  
  const [newEvent, setNewEvent] = useState(emptyEvent);

  const onAddEvent = () => {
    updateResponse('history', responses.history.concat(newEvent));
    setNewEvent(emptyEvent);
  };

  return (
    <Box>
      <QuestionTitle text="History of the issue"/>
      <Box mb={4}>
        <Typography gutterBottom>
          Take us through the issue step by step by adding relevant events below. For each event, you will need to provide an approximate date.
        </Typography>
        <Typography>
          Examples:
        </Typography>
        <Typography>
          03/03/2020 - I first noticed the leak
        </Typography>
        <Typography>
          06/03/2020 - I contacted Paul the landlord about it
        </Typography>
      </Box>
      {responses.history.length > 0 && (
        <Box mb={2}>
          <Typography 
            variant="h4"
          >
          Events
          </Typography>
        </Box>
      )}
      {responses.history.length > 0 && (
        <Box mb={4}>
          {responses.history.map(historyEvent => (
            <Box key={historyEvent.date.toString()} display="flex" justifyContent="space-between">
              <Typography>{moment(historyEvent.date).format('DD/MM/YYYY')} - {historyEvent.description}</Typography>
            </Box>
          ))}

        </Box>
      )}
      <Box mb={4} p={4} border={1} borderRadius={4}>
        <Box mb={2}>
          <FormGroup>
            <KeyboardDatePicker
              disableToolbar
              format="DD/MM/YYYY"
              margin="normal"
              variant="inline"
              label="Date"
              value={newEvent.date}
              onChange={date => setNewEvent({
                ...newEvent,
                date
              })}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label="Description"
              // variant="outlined"
              onChange={e => setNewEvent({
                ...newEvent,
                description: e.target.value
              })}
              value={newEvent.description}
              margin="normal"
            />
          </FormGroup>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={onAddEvent}>
          Add
          </Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button color="primary" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

