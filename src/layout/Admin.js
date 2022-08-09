import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Header from "./Header";
import Withdrawal from "../conponents/Withdrawal";
import BalanceInquiry from "../conponents/BalanceInquiry";
import Transfer from "../conponents/Transfer";
import User from "../conponents/User";
import MainContextProvider from "../context/MainContext";
import Account from "../conponents/Account";

function Layout() {

    function RequireAuth({ children }) {
        if (localStorage.getItem('token') === null) {
            return <Navigate to="/auth/signin" />;
        }
        return children;
    }

    return (
        <div>
            <MainContextProvider>
                <Header />
                <Routes >
                    <Route path="accounts" index element={<RequireAuth> <Account /></RequireAuth>} />
                    <Route path="account" element={<RequireAuth><User /></RequireAuth>} />
                    <Route path="account/withdrawal" element={<RequireAuth><Withdrawal /></RequireAuth>} />
                    <Route path="account/balance-inquiry" element={<RequireAuth><BalanceInquiry /></RequireAuth>} />
                    <Route path="account/withdrawal" element={<RequireAuth><Withdrawal /></RequireAuth>} />
                    <Route path="account/transfer" element={<RequireAuth><Transfer /></RequireAuth>} />
                </Routes>
            </MainContextProvider>
        </div>
    );
}

export default Layout;
