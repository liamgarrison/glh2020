import React, {useState} from 'react';
import {Button, Box, TextField, Typography, FormGroup, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
import QuestionTitle from '../misc/QuestionTitle';

export default function Question({setQuestion, updateResponse, responses}) {

  const handleBack = () => {
    setQuestion('HistoryOfEvents');
  };

  const handleNext = () => {
    setQuestion('Availability');
  };

  const emptyDefect = {
    item: '',
    room: '',
    extentOfDamage: '',
    inconvenienceSuffered: '',
    costOfRepair: '',
    photo: ''
  };
  
  const [newDefect, setNewDefect] = useState(emptyDefect);

  const onAddEvent = () => {
    updateResponse('defects', responses.defects.concat(newDefect));
    setNewDefect(emptyDefect);
  };

  return (
    <Box>
      <QuestionTitle text="Specific problems in the property"/>
      <Box mb={4}>
        <Typography gutterBottom>
          Please add all the specifics about any damage that has been caused. This could be damage to the property or to your personal items. Please be as specific as possible.
        </Typography>
      </Box>
      <Box mb={4}>
        {responses.defects.length > 0 && (
          <Box mb={2}>
            <Typography 
              variant="h4"
            >
          Specific problems
            </Typography>
          </Box>
        )}
        {responses.defects.length > 0 && (
          <Box mb={4}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell>Room</TableCell>
                  <TableCell>Extent of damage</TableCell>
                  <TableCell>Inconvenience suffered</TableCell>
                  <TableCell>Cost of repair</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {responses.defects.map((defect) => (
                  <TableRow key={defect.item}>
                    <TableCell>{defect.item || <>&ndash;</>}</TableCell>
                    <TableCell>{defect.room || <>&ndash;</>}</TableCell>
                    <TableCell>{defect.extentOfDamage || <>&ndash;</>}</TableCell>
                    <TableCell>{defect.inconvenienceSuffered || <>&ndash;</>}</TableCell>
                    <TableCell>{defect.costOfRepair || <>&ndash;</>}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        )}
        <Box mb={4} p={4} border={1} borderRadius={4}>
          <Box mb={2}>
            <FormGroup>
              <TextField
                label="Item e.g. mould on the wall"
                variant="outlined"
                onChange={e => setNewDefect({
                  ...newDefect,
                  item: e.target.value
                })}
                value={newDefect.item}
                margin="normal"
              />
            </FormGroup>     
            <FormGroup>
              <TextField
                label="Room e.g. bedroom"
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
                label="Extent of damage e.g. top right corner near window"
                variant="outlined"
                onChange={e => setNewDefect({
                  ...newDefect,
                  extentOfDamage: e.target.value
                })}
                value={newDefect.extentOfDamage}
                margin="normal"
              />
            </FormGroup>
            <FormGroup>
              <TextField
                label="Inconvenience suffered e.g. cough is getting worse, damage to clothes"
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
                label="Cost of repair e.g unsure - ~£300"
                variant="outlined"
                onChange={e => setNewDefect({
                  ...newDefect,
                  costOfRepair: e.target.value
                })}
                value={newDefect.costOfRepair}
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

