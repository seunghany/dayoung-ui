import React, { Component } from 'react';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chat from './Chat.js';


class Chatbot extends Component {
  constructor() {
    super();
    //injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider>
        <Chat />
      </MuiThemeProvider>
    );
  }
}

export default Chatbot;
