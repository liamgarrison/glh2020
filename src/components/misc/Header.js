import React from 'react';
import Logo from '../../images/logo.png';
import {Box} from '@material-ui/core';

export default function Header () {
  return (
    <Box mb={8} px={2} py={1} boxShadow={1} bgcolor="white">
      <img src={Logo} height={80}/>
    </Box>
  );
}
