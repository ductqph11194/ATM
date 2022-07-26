import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { TitleText } from '../context/MainContext';
function Account({ users }) {
    const { setTitle } = useContext(TitleText);
    useEffect(() => {
        setTitle("LIST USERS");
    }, []);

    console.log(TitleText);
    return (
        <>
            <div className="App">
                <h1>LIST ACCOUNT</h1>
            </div>
            <div>
                <Link to="/addAccount" className="btn btn-primary">Add Account</Link>
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
                                        to={`/account/${user._id}`}
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