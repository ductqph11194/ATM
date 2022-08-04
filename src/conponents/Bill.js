import React, { useEffect, useContext, useState } from 'react'
import { TitleText } from '../context/MainContext';
import "../css/Bill.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createWithdraw } from "../redux/reducer"

function Bill({ amounts, user }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { setTitle } = useContext(TitleText);

    useEffect(() => { }, []);
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(
            createWithdraw({
                accountNumber: user?.result?.accountNumber,
                amount: +amounts,
            })
        );
        navigate(-1);
    };

    useEffect(() => {
        setTitle("Bill")
    }, []);

    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return (
        <>
            <div class="container" style={{ maxWidth: '400px' }}>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name :{user?.result?.name}</li>
                    <li class="list-group-item">Account Number :{user?.result?.accountNumber}</li>
                    <li class="list-group-item">Amount remaining :{user?.result?.balance - amounts}</li>
                    <li class="list-group-item">Amount withdrawal :{amounts}</li>
                    <li class="list-group-item">Date :{date}</li>
                    <li class="list-group-item">Time :{time}</li>
                </ul>
                <button onClick={(e) => handleUpdate(e)}>xong</button>
            </div>
        </>
    )
}

export default Bill