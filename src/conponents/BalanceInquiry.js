import React, { useEffect, useContext } from 'react'
import { TitleText } from '../context/MainContext';
import { useDispatch, useSelector } from "react-redux";
import { getBalanceUser, selectBalance, getTextUpdate } from "../redux/reducer";
import { useParams, useNavigate } from "react-router-dom";

function BalanceInquiry() {
    const navigate = useNavigate();
    const { setTitle } = useContext(TitleText);
    const params = useParams();
    const dispatch = useDispatch();
    const user = useSelector(selectBalance);
    useEffect(() => {
        const id = params.id;
        dispatch(getBalanceUser(id));
    }, []);


    useEffect(() => {
        setTitle("Balance Inquiry");
    }, []);

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h2> <span style={{ color: 'blue' }}> Name: </span>{user?.result?.name}</h2>
                <h2> <span style={{ color: 'blue' }}>Phone: </span>{user?.result?.phone}</h2>
                <h2> <span style={{ color: 'blue' }}>Amount: </span>{user?.result?.balance}</h2>
                <h2> <span style={{ color: 'blue' }}> </span></h2>
            </div>
            <div className="mt-3" style={{ marginLeft: '770px' }}>
                <button onClick={() => navigate(-1)} className="btn btn-primary">Back</button>
            </div>
        </div>
    )
}

export default BalanceInquiry