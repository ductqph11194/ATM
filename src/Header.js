import React, { useContext } from "react";
import { useSelector } from "react-redux"
import { TitleText } from './context/MainContext'

function Header() {
    const { title } = useContext(TitleText);
    return (
        <div className="PageHeader">
            <h2> ATM PROJECT - {title}</h2>
        </div>
    );
}

export default Header;
