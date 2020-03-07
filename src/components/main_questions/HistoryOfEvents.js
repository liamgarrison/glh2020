import React, {useState} from 'react';
import {Button, Box, TextField, Typography} from '@material-ui/core';
import {KeyboardDatePicker} from '@material-ui/pickers';
import QuestionTitle from '../misc/QuestionTitle';
import {format} from 'date-fns';

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
      <QuestionTitle text="History of events"/>
      <Box mb={4}>
        <Box  mb={4}>
          {responses.history.map(historyEvent => (
            <Box key={historyEvent.date.toString()} display="flex" justifyContent="space-between">
              <Typography>{format(historyEvent.date, 'MM/dd/yyyy')} {historyEvent.description}</Typography>
            </Box>
          ))}

        </Box>
        <Typography mb={4}>Add new event</Typography>
        <Box display="flex" justifyContent="space-between">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label="Date of event"
            value={newEvent.date}
            onChange={date => setNewEvent({
              ...newEvent,
              date
            })}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <TextField
            label="Description"
            variant="outlined"
            onChange={e => setNewEvent({
              ...newEvent,
              description: e.target.value
            })}
            value={newEvent.description}
            margin="normal"
          />
        </Box>
        <Button variant="contained" color="primary" onClick={onAddEvent}>
          Add
        </Button>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="secondary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

