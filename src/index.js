import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom';

const Application = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
