import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

// Provider is a component we get from redux.
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

ReactDOM.render(

  // The provider component wraps around the application so that everything inside it gets access to this component(store object).
  <Provider store={store}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
