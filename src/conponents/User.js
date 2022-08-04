import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { TitleText } from '../context/MainContext';
import { axiosClient } from "../axiosClient";
import { getUser, selectUser, getTextUpdate } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
    const data = useSelector(selectUser);
    const dispatch = useDispatch();
    const params = useParams();
    const { setTitle } = useContext(TitleText);
    const navigate = useNavigate();
    const textt = useSelector(getTextUpdate);

    useEffect(() => {
        setTitle(`Dashboard `);
    }, []);

    useEffect(() => {
        dispatch(getUser());
    }, []);

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h2> <span style={{ color: 'blue' }}> Name: </span>{data?.result?.name}</h2>
                <h2> <span style={{ color: 'blue' }}>Phone  : </span>{data?.result?.phone}</h2>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div class="col"></div>
                    <div className="col">
                        <Link to={`balance-inquiry`} type="button" style={{ width: '150px' }} className="btn btn-primary">Balance Inquiry</Link>
                    </div>

                    <div className="col">
                        <button type="button" style={{ width: '150px' }} className="btn btn-primary">Transaction</button>
                    </div>
                    <div class="col"></div>
                </div>
                <div className="row pt-3">
                    <div class="col"></div>
                    <div className="col">
                        <Link to={`withdrawal`} type="button" style={{ width: '150px' }} className="btn btn-primary">Withdrawal</Link>
                    </div>
                    <div className="col">
                        <button type="button" style={{ width: '150px' }} className="btn btn-primary">Change Pin</button>
                    </div>
                    <div class="col"></div>
                </div>
                <div className="row pt-3">
                    <div class="col"></div>
                    <div className="col">
                        <Link to={`transfer`} type="button" style={{ width: '150px' }} className="btn btn-primary">Transfer</Link>
                    </div>
                    <div className="col">
                        <button type="button" style={{ width: '150px' }} className="btn btn-primary">Other</button>
                    </div>
                    <div class="col"></div>
                </div>
                <div className="mt-3" style={{ marginLeft: '750px' }}>
                    <button onClick={() => navigate(-1)} className="btn btn-primary">Back</button>
                </div>
            </div>
        </>
    )
}

export default User