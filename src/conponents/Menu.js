import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TitleText } from '../context/MainContext';
import { getUser, selectUser } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
    const data = useSelector(selectUser);
    const dispatch = useDispatch();
    const { setTitle } = useContext(TitleText);
    const navigate = useNavigate();

    useEffect(() => {
        setTitle(`Dashboard `);
    }, []);

    useEffect(() => {
        dispatch(getUser());
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/auth/signin');
    };


    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h2> <span style={{ color: 'blue' }}> Name: </span>{data?.result?.name}</h2>
                <h2> <span style={{ color: 'blue' }}>Phone  : </span>{data?.result?.phone}</h2>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <Link to={`balance-inquiry`} type="button" style={{ width: '150px' }} className="btn btn-primary">Balance Inquiry</Link>
                    </div>

                    <div className="col">
                        <Link to={`list-transaction`} type="button" style={{ width: '150px' }} className="btn btn-primary">Transaction</Link>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row pt-3">
                    <div className="col"></div>
                    <div className="col">
                        <Link to={`withdrawal`} type="button" style={{ width: '150px' }} className="btn btn-primary">Withdrawal</Link>
                    </div>
                    <div className="col">
                        <Link to={`change-pin`} type="button" style={{ width: '150px' }} className="btn btn-primary">Change Pin</Link>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row pt-3">
                    <div className="col"></div>
                    <div className="col">
                        <Link to={`transfer`} type="button" style={{ width: '150px' }} className="btn btn-primary">Transfer</Link>
                    </div>
                    <div className="col">
                        <button type="button" style={{ width: '150px' }} className="btn btn-primary">Other</button>
                    </div>
                    <div className="col"></div>
                </div>



                <div className="mt-3" style={{ marginLeft: '750px' }}>
                    <button onClick={() => logout()} className="btn btn-danger">LogOut</button>
                </div>
            </div>
        </>
    )
}

export default User