import React, {useState} from 'react';
import {Button, Box, Typography} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';
import {KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';
import moment from 'moment';

export default function Question({setQuestion, updateResponse, responses}) {

  const handleBack = () => {
    setQuestion('ListOfDefects');
  };

  const handleNext = () => {
    setQuestion('AppointingAnExpert');
  };

  const emptyAvailability = {
    date: moment().startOf('day').add(1, 'day').toDate(),
    startAt: moment().startOf('day').add(1, 'day').add(8, "hours").toDate(),
    endAt: moment().startOf('day').add(1, 'day').add(16, "hours").toDate()
  };
  
  const [newAvailability, setNewAvailability] = useState(emptyAvailability);

  const onAddEvent = () => {
    const {date} = newAvailability;

    const startAt = moment(date);
    const endAt = moment(date);

    const startAtMins = moment(newAvailability.startAt).minutes();
    const startAtHrs = moment(newAvailability.startAt).hours();

    const endAtMins = moment(newAvailability.endAt).minutes();
    const endAtHrs = moment(newAvailability.endAt).hours();

    startAt.minutes(startAtMins);
    startAt.hours(startAtHrs);

    endAt.minutes(endAtMins);
    endAt.hours(endAtHrs);


    updateResponse('availability', responses.availability.concat({
      startAt: startAt.toDate(),
      endAt: endAt.toDate(),
    }));
    setNewAvailability(emptyAvailability);
  };

  return (
    <Box>
      <QuestionTitle text="When are you home?"/>
      <Box mb={4}>
        <Typography gutterBottom>
          Please add some times when you will be available for the landlord to visit the property.
        </Typography>
      </Box>
      <Box mb={4}>
        {responses.availability.length > 0 && (
          <Box mb={2}>
            <Typography 
              variant="h4"
            >
              Times
            </Typography>
          </Box>
        )}
        <Box  mb={4}>
          {responses.availability.map(availabilityItem => (
            <Box key={JSON.stringify(availabilityItem)} display="flex" justifyContent="space-between">
              <Typography>{moment(availabilityItem.startAt).format('DD/MM/YYYY')}: {moment(availabilityItem.startAt).format('HH:mm')} - {moment(availabilityItem.endAt).format('HH:mm')}</Typography>
            </Box>
          ))}
        </Box>
        <Box mb={4} p={4} border={1} borderRadius={4}>
          <Typography variant="h4" mb={4}>Add times</Typography>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <KeyboardDatePicker
              disableToolbar
              format="DD/MM/YYYY"
              margin="normal"
              label="Date"
              value={newAvailability.date}
              onChange={date => setNewAvailability({
                ...newAvailability,
                date: date
              })}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              disableToolbar
              format="HH:mm"
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
            <KeyboardTimePicker
              disableToolbar
              format="HH:mm"
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
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={onAddEvent}>
            Add
            </Button>
          </Box>
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

