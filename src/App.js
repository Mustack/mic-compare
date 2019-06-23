import React, { Component } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Drawer from 'material-ui/Drawer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: false
    };
  }

  handleDrawerToggle = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  };
  render() {
    const contentStyle = {
      transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)'
    };
    if (this.state.drawerOpen) {
      contentStyle.marginLeft = 256;
    }

    return (
      <div style={contentStyle}>
        <Navbar handleDrawer={this.handleDrawerToggle} />
        <Drawer
          type="persistent"
          onRequestChange={this.handleDrawerToggle}
          open={this.state.drawerOpen}>
          <h1>Stuff!</h1>
        </Drawer>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
