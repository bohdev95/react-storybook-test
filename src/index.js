import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store, { persistor } from './Store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);
const Main = () => {
  return (
    // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    // </React.StrictMode>
  );
};

root.render(<Main />);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
