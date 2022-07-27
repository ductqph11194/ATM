import React, { useEffect } from 'react'
import "../css/Bill.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createWithdraw } from "../redux/reducer"

function Bill({ amounts, user }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => { }, []);
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(
            createWithdraw({
                accountNumber: user.accountNumber,
                amount: +amounts,
            })
        );
        navigate(-1);

    };
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    console.log("done", user.accountNumber, user?.balance, amounts);
    return (
        <>
            <div class="container" style={{ maxWidth: '400px' }}>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name :{user.name}</li>
                    <li class="list-group-item">Account Number :{user.accountNumber}</li>
                    <li class="list-group-item">Amount remaining :{user.balance - amounts}</li>
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