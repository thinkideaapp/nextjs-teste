import React from 'react';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';

const Nav = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar></Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
