import React from 'react';
import AppBar from 'material-ui/AppBar';

const Navbar = props => {
  return (
    <AppBar onLeftIconButtonTouchTap={props.handleDrawer} title="Cybrary" />
  );
};

export default Navbar;
