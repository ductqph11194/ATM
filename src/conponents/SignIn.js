import React, { useEffect, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn, register } from '../redux/reducer'
import { TitleText } from '../context/MainContext';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/SigIn.css"

const SignIn = () => {
    const [accountName, setAccNumber] = useState(0);
    const [name, setName] = useState(0);
    const [authMode, setAuthMode] = useState(false)
    const [pass, setPass] = useState("");
    const [aloalo, setAlo] = useState('')
    const [erorr, setErorr] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { setTitle } = useContext(TitleText);

    const handleSignIn = async (e) => {
        e.preventDefault();
        const response = await dispatch(
            signIn(
                {
                    accountNumber: accountName,
                    pin: pass,
                })
        );
        const { payload } = response;
        if (payload.code === 200 || 201) {
            navigate('/accounts');

        } else {
            alert(payload.message);
        }

    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await dispatch(
            register({
                accountNumber: accountName,
                pin: pass,
                name: name
            })
        );
        const { payload } = response;
        if (payload.code === 200 || 204) {
            setAuthMode(!authMode)

        } else {
            alert(payload.message);
        }
        console.log(payload.message);

    };
    useEffect(() => {
        setTitle("Log In")
    }, []);

    const changeAuthMode = () => {
        setAuthMode(!authMode)
    }

    return (
        <>
            {authMode === false ? (
                <div className="Auth-form-container">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Sign In</h3>
                            <div className="text-center">
                                Not registered yet?{" "}

                                <span className="link-primary" onClick={() => changeAuthMode()}>   Sign Up</span>

                            </div>
                            <div className="form-group mt-3">
                                <label>Account Number</label>
                                <input
                                    type="accoutNumber"
                                    className="form-control mt-1"
                                    placeholder="Enter Accout Number"
                                    onChange={e => setAccNumber(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    onChange={e => setPass(e.target.value)}
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary" onClick={handleSignIn}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="Auth-form-container">
                    <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Sign Up</h3>
                            <div className="text-center">
                                Already registered?{" "}
                                <span className="link-primary" onClick={() => changeAuthMode()}>
                                    Sign In
                                </span>
                            </div>
                            <div className="form-group mt-3">
                                <label>Full Name</label>
                                <input
                                    type="name"
                                    className="form-control mt-1"
                                    placeholder="Your Full Name"
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Account Number</label>
                                <input
                                    type="accoutNumber"
                                    className="form-control mt-1"
                                    placeholder="Account Number"
                                    onChange={e => setAccNumber(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Password"
                                    onChange={e => setPass(e.target.value)}
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary" onClick={handleRegister}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>)}
        </>
    )

}

export default SignIn
