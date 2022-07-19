import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Withdrawal from "./conponents/Withdrawal";
import Surplus from "./conponents/Surplus";
import Transfer from "./conponents/Transfer";
import User from "./conponents/User";
import Menu from "./Menu"
import App from "./App";

function Layout() {
    return (
        <div>

            <Header />
            <Routes>
                <Route path="account" element={<App />} />
                {/* <Route path="/account/:id" element={<User />}> */}
                <Route index element={<Menu />} />
                <Route path="withdrawal" element={<Withdrawal />} />
                <Route path="surplus" element={<Surplus />} />
                <Route path="transfer" element={<Transfer />} >
                </Route>
                {/* </Route> */}
            </Routes>
        </div>
    );
}

export default Layout;
