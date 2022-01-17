import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import { StoreContext } from './StoreContext';

const renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App dispatch={store.dispatch.bind(store)}/>
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

renderEntireTree();
store.subscribe(() => {
  renderEntireTree()
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
