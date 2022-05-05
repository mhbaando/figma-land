import React from 'react';
import ReactDom from 'react-dom/client';
import App from './app';

// select wehre to render our applicaton
const root = ReactDom.createRoot(document.getElementById('root'));
// application needs to be rendered
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
