import React, {useState} from 'react';
import {Button, Box, Typography} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';
import {format} from 'date-fns';
import {KeyboardDateTimePicker} from '@material-ui/pickers';

export default function Question({setQuestion, updateResponse, responses, onComplete}) {

  const handleBack = () => {
    setQuestion('ListOfDefects');
  };

  const emptyAvailability = {
    startAt: new Date(),
    endAt: new Date()
  };
  
  const [newAvailability, setNewAvailability] = useState(emptyAvailability);

  const onAddEvent = () => {
    updateResponse('availability', responses.availability.concat(newAvailability));
    setNewAvailability(emptyAvailability);
  };

  return (
    <Box>
      <QuestionTitle text="Please list your availability for the landlord to visit"/>
      <Box mb={4}>
        <Box  mb={4}>
          {responses.availability.map(availabilityItem => (
            <Box key={JSON.stringify(availabilityItem)} display="flex" justifyContent="space-between">
              <Typography>From: {format(availabilityItem.startAt, 'MM/dd/yyyy HH:mm')}, To: {format(availabilityItem.endAt, 'MM/dd/yyyy HH:mm')}</Typography>
            </Box>
          ))}
        </Box>
        <Typography mb={4}>Add new available time</Typography>
        <Box display="flex" justifyContent="space-between">
          <KeyboardDateTimePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy HH:mm"
            margin="normal"
            label="Start time"
            value={newAvailability.startAt}
            onChange={date => setNewAvailability({
              ...newAvailability,
              startAt: date
            })}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDateTimePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy HH:mm"
            margin="normal"
            label="End time"
            value={newAvailability.endAt}
            onChange={date => setNewAvailability({
              ...newAvailability,
              endAt: date
            })}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
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
        <Button variant="contained" color="secondary" onClick={onComplete}>
          Complete
        </Button>
      </Box>
    </Box>
  );
}

