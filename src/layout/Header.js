import React, { useContext } from "react";
import { useSelector } from "react-redux"
import { TitleText } from '../context/MainContext'
import { getTextUpdate } from "../redux/reducer";

function Header() {
    const { title } = useContext(TitleText);
    const data = useSelector(getTextUpdate);
    console.log(data);
    return (
        <div className="PageHeader" style={{ textAlign: 'center', paddingBottom: '20px' }}>
            <h3> ATM PROJECT - {title}</h3>
            <span>{data.recentlyAction}</span>

        </div>
    );
}

export default Header;
