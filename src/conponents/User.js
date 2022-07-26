import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TitleText } from '../context/MainContext';
import { axiosClient } from "../axiosClient";
const User = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const { setTitle } = useContext(TitleText);
    const AccApi = {
        get(id) {
            const url = `/account/${id}`;
            return axiosClient.get(url);
        },
    }
    useEffect(() => {
        setTitle("DETAIL INFORMATION");
    }, []);
    useEffect(() => {
        const getAcc = async () => {
            try {
                const { data } = await AccApi.get(id);
                setData(data)
                console.log(data);
            } catch (error) {
            }
        }
        getAcc();

    }, [])
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h2> <span style={{ color: 'blue' }}> Name: </span>{data.name}</h2>
                <h2> <span style={{ color: 'blue' }}>Phone  : </span>{data.phone}</h2>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <Link to={`balance-inquiry`} type="button" style={{ width: '150px' }} className="btn btn-primary">Balance Inquiry</Link>
                    </div>
                    <div className="col">
                        <button type="button" style={{ width: '150px' }} className="btn btn-primary">Transaction</button>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <button type="button" style={{ width: '150px' }} className="btn btn-primary">Withdrawal</button>
                    </div>
                    <div className="col">
                        <button type="button" style={{ width: '150px' }} className="btn btn-primary">Change Pin</button>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <button type="button" style={{ width: '150px' }} className="btn btn-primary">Transfer</button>
                    </div>
                    <div className="col">
                        <button type="button" style={{ width: '150px' }} className="btn btn-primary">Other</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default User