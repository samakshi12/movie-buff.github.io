import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
  

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. 
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results 
reportWebVitals();
