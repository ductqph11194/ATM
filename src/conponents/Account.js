import React, { useEffect, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { TitleText } from '../context/MainContext';

function Account({ users }) {

    const { setTitle } = useContext(TitleText);
    const navigate = useNavigate();

    useEffect(() => {
        setTitle("LIST USERS");
    }, []);
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/auth/signin');
    };

    return (
        <>
            <div className="App">
                <h1>LIST ACCOUNT</h1>
            </div>
            <div>
                <button onClick={() => logout()} className="btn btn-danger">LogOut</button>
            </div>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th> Name</th>
                        <th>Phone</th>
                        <th>Amount</th>
                        <th>Account Number</th>
                        <th>Pin</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) => (
                        <>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <Link
                                        to={`/admin/account`}
                                        className="User"
                                    >
                                        {user.name}{" "}
                                    </Link>
                                </td>
                                <td>{user.phone}</td>
                                <td>{user.balance}</td>
                                <td>{user.accountNumber}</td>
                                <td>{user.pin}</td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Account