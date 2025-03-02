import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../app/store.js';
import App from './App';
import './index.css'; // Импортируем стили


const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
  const theme = store.getState().theme;
  document.body.className = theme;

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

store.subscribe(renderApp);
renderApp();
