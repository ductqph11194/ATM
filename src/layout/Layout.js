import React, { useEffect, useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Header from "./Header";
import Withdrawal from "../conponents/Withdrawal";
import BalanceInquiry from "../conponents/BalanceInquiry";
import Transfer from "../conponents/Transfer";
import User from "../conponents/User";
import AddAccount from "../conponents/AddAccount";
import App from "../App";
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
    console.log(userList);

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

    useEffect(() => {
        const getAcc = async () => {
            try {
                const { data } = await AccApi.getAll();
                setListAcc(data);

            }
            catch (error) {
                console.log(error);
            }
        }
        getAcc();
    }, [])

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
                    <Route path="account" element={<Account users={userList} />} />
                    <Route path="/account/:id" element={<User users={listAcc} />} />
                    <Route path="/addAccount" element={<AddAccount onAdd={addAccount} />} />
                    <Route path="/account/:id/withdrawal" element={<Withdrawal />} />
                    <Route path="/account/:id/balance-inquiry" element={<BalanceInquiry />} />
                    <Route path="/account/:id/withdrawal" element={<Withdrawal />} />
                    <Route path="/account/:id/transfer" element={<Transfer />} />

                    <Route path="/" element={<Navigate to="/account" />} />
                </Routes>
            </MainContextProvider>
        </div>
    );
}

export default Layout;
