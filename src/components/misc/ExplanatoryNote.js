import React from 'react';
import {Box, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontWeight: 'semiBold',
    fontSize: 16,
    color: 'white'
  }
});

export default function ExplanatoryNote ({text, ...rest}) {
  const classes = useStyles();
  return (
    <Box bgcolor="#0082ba" {...rest} p={4} borderRadius={4}>
      <Typography classes={classes}>{text}</Typography>
    </Box>
  );
}
