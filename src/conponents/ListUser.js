import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { TitleText } from '../context/MainContext';
function ListUser({ users }) {
    // const { setTitle } = useContext(TitleText);
    // useEffect(() => {
    //     setTitle("LIST USERS");
    // }, []);
    console.log(TitleText);
    return (
        <>
            <div className="App">
                <h1>LIST ACCOUNT</h1>
            </div>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ACCOUNT NAME</th>
                        <th>ACCOUNT NUMBER</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.accountName}</td>
                            <td>{user.accountNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ListUser