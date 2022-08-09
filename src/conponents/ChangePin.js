import React, { useEffect, useContext, useState } from 'react'
import { changePin } from '../redux/reducer'
import { TitleText } from '../context/MainContext';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ChangePin() {
    const [oldPin, setOldPin] = useState("");
    const [newPin, setNewPin] = useState("");
    const [comfirmPin, setComfirmPin] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChangePin = async (e) => {
        e.preventDefault();
        const response = await dispatch(
            changePin(
                {
                    oldPin: oldPin,
                    newPin: newPin,
                    confirmPin: comfirmPin
                })
        );
        const { payload } = response;
        console.log(response);
        if (payload.code === 200) {
            navigate('/admin/account');
        } else {
            alert(payload.message);
        }

    };
    return (
        <div>
            <input
                type="newPin"
                className="form-control mt-1"
                placeholder="Enter Accout newPin"
                onChange={e => setNewPin(e.target.value)}
            />
            <input
                type="newPin"
                className="form-control mt-1"
                placeholder="Enter Accout old"
                onChange={e => setOldPin(e.target.value)}
            />
            <input
                type="newPin"
                className="form-control mt-1"
                placeholder="Enter Accout com"
                onChange={e => setComfirmPin(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" onClick={handleChangePin}>
                Comfirm
            </button>
        </div>
    )
}

export default ChangePin