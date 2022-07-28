import React, { useEffect, useContext, useState } from 'react'
import { TitleText } from '../context/MainContext';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Bill from "./Bill"
import BtnWithdrawal from "./BtnWithdrawal";
import { getBalanceUser, selectBalance, getTextUpdate } from "../redux/reducer";

function Withdrawal() {
    const [amount, setAmount] = useState(0);
    const [isFocus, isSetFocus] = useState(false);
    const [isRedirectBill, isSetRedirectBill] = useState(false);
    const user = useSelector(selectBalance);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { setTitle } = useContext(TitleText);
    const textt = useSelector(getTextUpdate);
    const params = useParams();
    const totalMoney = user?.result?.balance;

    useEffect(() => {
        const id = params.id;
        dispatch(getBalanceUser(id));
    }, []);

    useEffect(() => {
        setTitle("Withdrawal")
    }, []);

    const handleAmounts = () => {
        isSetFocus(!isFocus);
    };

    const handleSubmit = () => {
        if (amount === 0 || amount === "") {
            alert("Only withdraw the amount over 5 ");
        } else if (+totalMoney >= +amount) {
            isSetRedirectBill(true);
        } else {
            alert(" money not enought");
        }
    };

    return (
        <>
            {isRedirectBill === false ? (
                <div className="container text-center">
                    <div className="row">
                        <div class="col"></div>
                        <div className="col">
                            < BtnWithdrawal
                                value={"5"}
                                setAmount={setAmount}
                                isFocus={isFocus}
                                isSetFocus={isSetFocus}
                                amount={amount}
                                onClick={(e) => { handleAmounts() }}
                            />
                        </div>

                        <div className="col">
                            < BtnWithdrawal
                                value={"10"}
                                setAmount={setAmount}
                                isFocus={isFocus}
                                isSetFocus={isSetFocus}
                                amount={amount}
                                onClick={(e) => { handleAmounts() }}
                            />
                        </div>
                        <div class="col"></div>
                    </div>
                    <div className="row pt-3">
                        <div class="col"></div>
                        <div className="col">
                            < BtnWithdrawal
                                value={"20"}
                                setAmount={setAmount}
                                isFocus={isFocus}
                                isSetFocus={isSetFocus}
                                amount={amount}
                                onClick={(e) => { handleAmounts() }}
                            />
                        </div>
                        <div className="col">
                            < BtnWithdrawal
                                value={"50"}
                                setAmount={setAmount}
                                isFocus={isFocus}
                                isSetFocus={isSetFocus}
                                amount={amount}
                                onClick={(e) => { handleAmounts() }}
                            />
                        </div>
                        <div class="col"></div>
                    </div>
                    <div className="row pt-3">
                        <div class="col"></div>
                        <div className="col">
                            < BtnWithdrawal
                                value={"100"}
                                setAmount={setAmount}
                                isFocus={isFocus}
                                isSetFocus={isSetFocus}
                                amount={amount}
                                onClick={(e) => { handleAmounts() }}
                            />
                        </div>
                        <div className="col">
                            <input type="button" value={"Other"} style={{ width: '150px' }} className="btn btn-primary" />
                        </div>
                        <div class="col"></div>
                    </div>
                    <div className="row pt-3" style={{ paddingLeft: '470px' }} >
                        <button type="button" onClick={(e) => handleSubmit(e)} style={{ width: '350px', }} className="btn btn-primary">Comfirm</button>
                    </div>
                    <div className="mt-3" style={{ marginLeft: '750px' }}>
                        <button onClick={() => navigate(-1)} className="btn btn-primary">Back</button>
                    </div>
                </div>
            ) : (
                <Bill amounts={amount} user={user} />
            )}
        </>
    )
}

export default Withdrawal