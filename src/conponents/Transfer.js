import React, { useEffect, useContext, useState } from 'react'
import { TitleText } from '../context/MainContext';
import { getUsers, selectUser, selectBalance, getListUser, getBalanceUser, createTransfer } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Transfer.css"

const Transfer = () => {
    const [receiver, setReceiver] = useState("");
    const [amount, setAmount] = useState(0);
    const [isInfo, isSetInfo] = useState(false);
    const [content, setContent] = useState("");
    const user = useSelector(selectBalance)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const balanceUser = useSelector(selectBalance);
    const userList = useSelector(getUsers);
    const { setTitle } = useContext(TitleText);
    const bankuser = useSelector(selectUser);

    useEffect(() => {
        dispatch(getListUser());
        setTitle("TRANSFER");
        dispatch(getBalanceUser());
    }, []);

    const handleTransfer = () => {
        dispatch(
            createTransfer({
                accountNumber: user?.result?.accountNumber,
                amount: +amount,
                accountNumberReceiver: receiver.accountNumber
            })
        );
        navigate(-1);
        isSetInfo(!isInfo);
    }

    const handlerTransfer = (user) => {
        setReceiver(user.user);
        isSetInfo(!isInfo);
    };

    const handleOtherAmount = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setAmount(value);
        if (amount > balanceUser.result.balance) {
            alert("Số tiền của bạn không đủ.");
            setAmount("");
        }
    };

    const back = () => {
        isSetInfo(!isInfo);
    }

    return (
        <>

            {isInfo === false ? (
                <>
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>ACCONNT NUMBER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList?.map((user, index) => (

                                <tr key={index} className="selecter">
                                    <td>
                                        <nav
                                            className="uppercase"
                                            onClick={() => handlerTransfer({ user })}
                                        >
                                            {user?.name}{" "}
                                        </nav>
                                    </td>
                                    <td>{user?.accountNumber}</td>
                                </tr>

                            ))}
                        </tbody>

                    </table>
                    <div className="mt-3" style={{ marginLeft: '750px' }}>
                        <button onClick={() => navigate(-1)} className="btn btn-primary">Back</button>
                    </div>
                </>
            ) : (<div className="transfer">
                <h3>Transfer Information :</h3>
                <div className="transfer_section">
                    <h4>Source account : {user.result.accountNumber} </h4>
                    <h5>Available balances : {balanceUser.result.balance} $ </h5>
                </div>

                <h3>Beneficiary information :</h3>
                <div className="transfer_section">
                    <h4>Beneficiary account : {receiver?.name}</h4>
                    <h5>Amount received : {amount} $</h5>
                </div>

                <h3>Transaction information :</h3>
                <div className="transfer_section">
                    <div>
                        <h4>Amount of money :</h4>{" "}
                    </div>
                    <div className="transition_btn_inputAmount ">
                        <input
                            type="text"
                            className="transtion_btn_inputAmount_input"
                            placeholder={"Amount of money ... "}
                            value={amount}
                            onChange={(e) => handleOtherAmount(e)}
                        />
                    </div>
                </div>
                <div className="transfer_section">
                    <input
                        type="button"
                        value={"continue"}
                        className="btn_effect transfer_continue"
                        onClick={() => handleTransfer()}
                    />
                </div>
                <div className="mt-3" style={{ marginLeft: '750px' }}>
                    <button onClick={() => back()} className="btn btn-primary">Back</button>
                </div>
            </div>)}

        </>
    )
}

export default Transfer