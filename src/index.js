import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from './layout/Admin';
import Auth from './layout/Auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import Withdrawal from "./conponents/Withdrawal";
import BalanceInquiry from "./conponents/BalanceInquiry";
import Transfer from "./conponents/Transfer";
import User from "./conponents/User";
import Account from "./conponents/Account";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes >
        {/* <Route path="/" element={<></>}> */}
        <Route path="admin/*" element={<Admin />} >
          {/* <Route path="/" element={<Navigate to="/accounts" />} /> */}
          <Route path="accounts" index element={<Account />} />
          <Route path="account" element={<User />} />
          <Route path="account/withdrawal" element={<Withdrawal />} />
          <Route path="account/balance-inquiry" element={<BalanceInquiry />} />
          <Route path="account/withdrawal" element={<Withdrawal />} />
          <Route path="account/transfer" element={<Transfer />} />
        </Route>
        <Route path="auth/*" element={<Auth />}>
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
