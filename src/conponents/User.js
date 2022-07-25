import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TitleText } from '../context/MainContext';
const User = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://611c56aea18e850017deca5d.mockapi.io/accounts/${id}`).then((response) => response.json())
            .then((data) => {
                setData(data)
                    ;;
            })
            .catch((error) => console.error(error));
    }, [])
    console.log(data);
    const { setTitle } = useContext(TitleText);
    useEffect(() => {
        setTitle("DETAIL INFORMATION");
    }, []);
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h2> <span style={{ color: 'blue' }}> Name: </span>{data.accountName}</h2>
                <h2> <span style={{ color: 'blue' }}>Phone  : </span>{data.phone}</h2>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col pt-3">
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