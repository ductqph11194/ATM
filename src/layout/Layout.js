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
import SignIn from "../conponents/SignIn";

function Layout() {
    const dispatch = useDispatch();
    const userList = useSelector(getUsers);

    useEffect(() => {
        dispatch(getListUser());
    }, []);

    const [listAcc, setListAcc] = useState([]);

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

    const addAccount = async (acc, data) => {
        try {
            const { data } = await AccApi.add(acc);
            setListAcc([
                ...listAcc,
                data
            ]);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <MainContextProvider>
                <Header />
                <Routes>
                    <Route path="accounts" element={<Account users={userList} />} />
                    <Route path="/account" element={<User users={listAcc} />} />
                    <Route path="/account/withdrawal" element={<Withdrawal />} />
                    <Route path="/account/balance-inquiry" element={<BalanceInquiry />} />
                    <Route path="/account/withdrawal" element={<Withdrawal />} />
                    <Route path="/account/transfer" element={<Transfer />} />
                    <Route path="/signIn" element={<SignIn />} />

                    <Route path="/" element={<Navigate to="/signIn" />} />
                </Routes>
            </MainContextProvider>
        </div>
    );
}

export default Layout;
