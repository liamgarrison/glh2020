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
        <Typography gutterBottom>
          Please add all defects that are present at the property, as well as any personal items that have been damaged as a result of the disrepairs. For personal items, please list them individually, specifying where you bought them and when it was bought. For example, "The floorboard" or "Laptop from May 2017".
        </Typography>
      </Box>
      <Box mb={4}>
        {responses.defects.length > 0 && (
          <Box mb={2}>
            <Typography 
              variant="h4"
            >
          Defects
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
                    <TableCell>{defect.extendOfDamage || <>&ndash;</>}</TableCell>
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
            <Typography variant="h4" mb={4}>Add new defect</Typography>
            <FormGroup>
              <TextField
                label="Item"
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

