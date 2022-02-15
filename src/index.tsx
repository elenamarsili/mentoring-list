import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MyListsProvider } from './contexts/ListsContext';

ReactDOM.render(
  <React.StrictMode>
    <MyListsProvider>
      <App />
    </MyListsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

