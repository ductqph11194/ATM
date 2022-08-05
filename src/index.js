import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Admin from './layout/Admin';
import Auth from './layout/Auth';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes >
        {/* <Route path="/" element={<></>}> */}
        <Route path="admin" element={<Admin />} >
          {/* <Route path="/" element={<Navigate to="/accounts" />} /> */}
          <Route path="accounts" />
          <Route path="account" />
          <Route path="account/withdrawal" />
          <Route path="account/balance-inquiry" />
          <Route path="account/withdrawal" />
          <Route path="account/transfer" />
        </Route>
        <Route path="auth" element={<Auth />}>
          <Route path="signin" />

        </Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
