import React, { useEffect, useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Header from "./Header";
import Withdrawal from "../conponents/Withdrawal";
import BalanceInquiry from "../conponents/BalanceInquiry";
import Transfer from "../conponents/Transfer";
import User from "../conponents/User";
import MainContextProvider from "../context/MainContext";
import { axiosClient } from '../axiosClient';
import Account from "../conponents/Account";
import { useDispatch, useSelector } from "react-redux";
import { getListUser, getUsers } from "../redux/reducer"

function Layout() {
    const dispatch = useDispatch();
    const userList = useSelector(getUsers);

    useEffect(() => {
        dispatch(getListUser());
    }, []);

    const [listAcc] = useState([]);

    const AccApi = {
        getAll() {
            const url = `/accounts`;
            return axiosClient.get(url);
        },
        add(acc) {
            const url = `/accountss`;
            return axiosClient.post(url, acc);
        },

    }

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

                    <Route path="accounts" element={<RequireAuth> <Account users={userList} index /></RequireAuth>} />
                    <Route path="account" element={<RequireAuth><User users={listAcc} /></RequireAuth>} />
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
