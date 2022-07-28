import React, { useEffect, useContext, useState } from 'react'
import { TitleText } from '../context/MainContext';
import { getUser, selectBalance, getBalanceUser, createTransfer } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const Transfer = () => {
    const [receiver, setReceiver] = useState("");
    const [amount, setAmount] = useState(0);
    const user = useSelector(selectBalance)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const { setTitle } = useContext(TitleText);
    useEffect(() => {
        const id = params.id;
        dispatch(getBalanceUser(id));
    }, []);
    useEffect(() => {
        setTitle("TRANSFER");
    }, []);
    const handleTransfer = () => {
        dispatch(
            createTransfer({
                accountNumber: user?.result?.accountNumber,
                amount: +amount,
                accountNumberReceiver: receiver
            })
        );
        navigate(-1);
    }
    return (
        <>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Receiver Account:</span>
                <input
                    type="input"
                    className="form-control"
                    placeholder="Please enter Receiver Account"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    onChange={e => { setReceiver(e.target.value) }}
                />
            </div>
            <div className="input-group flex-nowrap pt-3">
                <span className="input-group-text" id="addon-wrapping">Amount</span>
                <input
                    type="input"
                    className="form-control"
                    placeholder="Please enter Amount"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    onChange={e => { setAmount(e.target.value) }}
                />
            </div>
            <div class="pt-3">
                <button type="button" class="btn btn-warning" onClick={handleTransfer}>Warning</button>
            </div>
        </>
    )
}

export default Transfer