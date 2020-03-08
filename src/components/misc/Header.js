import React from 'react';
import Logo from '../../images/logo.png';
import {Box} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function Header () {
  return (
    <Box px={2} py={1} boxShadow={1} bgcolor="white">
      <Link to="/">
        <img src={Logo} height={80}/>
      </Link>
    </Box>
  );
}
