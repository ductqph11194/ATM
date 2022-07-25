import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Header from "./Header";
import Withdrawal from "../conponents/Withdrawal";
import BalanceInquiry from "../conponents/BalanceInquiry";
import Transfer from "../conponents/Transfer";
import User from "../conponents/User";
import AddAccount from "../conponents/AddAccount";
import App from "../App";
import MainContextProvider from "../context/MainContext";

function Layout() {
    return (
        <div>
            <MainContextProvider>
                <Header />
                <Routes>
                    <Route path="account" element={<App />} />
                    <Route path="/account/:id" element={<User />} />
                    <Route path="/addAccount" element={<AddAccount />} />
                    <Route path="/account/:id/withdrawal" element={<Withdrawal />} />
                    <Route path="/account/:id/balance-inquiry" element={<BalanceInquiry />} />
                    <Route path="/account/:id/transfer" element={<Transfer />} />

                    <Route path="/" element={<Navigate to="/account" />} />
                </Routes>
            </MainContextProvider>
        </div>
    );
}

export default Layout;
