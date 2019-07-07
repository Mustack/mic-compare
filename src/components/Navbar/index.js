import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const Navbar = props => {
  return (
    <AppBar color="primary" position="static" elevation={0}>
      <Toolbar>
        Mic Compare
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
