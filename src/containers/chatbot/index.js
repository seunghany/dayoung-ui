import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store';
import Chatbot from './components/Chatbot';

ReactDOM.render(<Provider store={store}>
                  <Chatbot />
                </Provider>,
                  document.getElementById('root')
               ); 
