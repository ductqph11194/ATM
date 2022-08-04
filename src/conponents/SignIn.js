import React, { useEffect, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from '../redux/reducer'
import { TitleText } from '../context/MainContext';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    const [phone, setPhone] = useState(0);
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { setTitle } = useContext(TitleText);
    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(
            signIn({
                accountNumber: phone,
                pin: pass,
            })
        );
    };
    console.log(phone);
    console.log(pass);
    useEffect(() => {
        setTitle("Log In")
    }, []);

    return (
        <>
            <input type="input" placeholder="phone" onChange={e => setPhone(e.target.value)} />
            <input type="input" placeholder="pass" onChange={e => setPass(e.target.value)} />
            <button onClick={handleSignIn}>
                Register
            </button>
        </>
    )
}

export default SignIn
