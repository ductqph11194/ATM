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
import User from "./conponents/Menu";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes >
        <Route path="admin/*" element={<Admin />} >
          <Route path="account" element={<User />} />
          <Route path="account/withdrawal" element={<Withdrawal />} />
          <Route path="account/balance-inquiry" element={<BalanceInquiry />} />
          <Route path="account/transfer" element={<Transfer />} />
        </Route>
        <Route path="auth/*" element={<Auth />}>
          <Route path="signin" />

        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
