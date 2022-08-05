import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import MainContextProvider from "../context/MainContext";
import SignIn from "../conponents/SignIn";

function Admin() {

    return (
        <MainContextProvider>
            <Header />
            <Routes>
                <Route>
                    <Route path="/signin" element={<SignIn />} />
                </Route>
            </Routes>
        </MainContextProvider>
    );
}

export default Admin;
