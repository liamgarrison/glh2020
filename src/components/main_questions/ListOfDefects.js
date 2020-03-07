import React, {useState} from 'react';
import {Button, Box, TextField, Typography, FormGroup} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion, updateResponse, responses, onComplete}) {

  const handleBack = () => {
    setQuestion('HistoryOfEvents');
  };

  const emptyDefect = {
    room: '',
    extendOfDamage: '',
    inconvenienceSuffered: '',
    costOfRepair: '',
    photo: null
  };
  
  const [newDefect, setNewDefect] = useState(emptyDefect);

  const onAddEvent = () => {
    updateResponse('defects', responses.defects.concat(newDefect));
    setNewDefect(emptyDefect);
  };

  return (
    <Box>
      <QuestionTitle text="List of defects"/>
      <Box mb={4}>
        <Box  mb={4}>
          {responses.defects.map(defect => (
            <Box key={JSON.stringify(defect)} display="flex" justifyContent="space-between">
              <Typography>{defect.room}, {defect.extendOfDamage}, {defect.inconvenienceSuffered}, {defect.costOfRepair}</Typography>
            </Box>
          ))}
        </Box>
        <Typography mb={4}>Add new defect</Typography>
        <FormGroup>
          <TextField
            label="Room"
            variant="outlined"
            onChange={e => setNewDefect({
              ...newDefect,
              room: e.target.value
            })}
            value={newDefect.room}
            margin="normal"
          />
        </FormGroup>        
        <FormGroup>
          <TextField
            label="Extent of damage"
            variant="outlined"
            onChange={e => setNewDefect({
              ...newDefect,
              extendOfDamage: e.target.value
            })}
            value={newDefect.extendOfDamage}
            margin="normal"
          />
        </FormGroup>
        <FormGroup>
          <TextField
            label="Inconvenience suffered"
            variant="outlined"
            onChange={e => setNewDefect({
              ...newDefect,
              inconvenienceSuffered: e.target.value
            })}
            value={newDefect.inconvenienceSuffered}
            margin="normal"
          />
        </FormGroup>
        <FormGroup>
          <TextField
            label="Cost of repair"
            variant="outlined"
            onChange={e => setNewDefect({
              ...newDefect,
              costOfRepair: e.target.value
            })}
            value={newDefect.costOfRepair}
            margin="normal"
          />
        </FormGroup>
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

