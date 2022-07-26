import React, { useEffect, useContext } from 'react'
import { TitleText } from '../context/MainContext';
import { Link, useParams, useNavigate } from "react-router-dom";

function Withdrawal() {
    const navigate = useNavigate();
    const { setTitle } = useContext(TitleText);
    useEffect(() => {
        setTitle("WITHDRAWAL");
    }, []);
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div class="col"></div>
                    <div className="col">
                        <Link to={`balance-inquiry`} type="button" style={{ width: '150px' }} className="btn btn-primary">500</Link>
                    </div>

                    <div className="col">
                        <button type="button" style={{ width: '150px' }} className="btn btn-primary">1000</button>
                    </div>
                    <div class="col"></div>
                </div>
                <div className="row pt-3">
                    <div class="col"></div>
                    <div className="col">
                        <Link to={`withdrawal`} type="button" style={{ width: '150px' }} className="btn btn-primary">50000</Link>
                    </div>
                    <div className="col">
                        <button type="button" style={{ width: '150px' }} className="btn btn-primary"> 10000</button>
                    </div>
                    <div class="col"></div>
                </div>
                <div className="row pt-3">
                    <div class="col"></div>
                    <div className="col">
                        <Link to={`transfer`} type="button" value={'20000'} style={{ width: '150px' }} className="btn btn-primary">20000</Link>
                    </div>
                    <div className="col">
                        <button type="button" style={{ width: '150px' }} className="btn btn-primary">Other Number</button>
                    </div>
                    <div class="col"></div>
                </div>
                <div className="row pt-3" style={{ paddingLeft: '470px' }} >
                    <button type="button" style={{ width: '350px', }} className="btn btn-primary">Comfirm</button>
                </div>
                <div className="mt-3" style={{ marginLeft: '750px' }}>
                    <button onClick={() => navigate(-1)} className="btn btn-primary">Back</button>
                </div>
            </div>
        </>
    )
}

export default Withdrawal