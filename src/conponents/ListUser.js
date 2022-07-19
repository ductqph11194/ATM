import React from 'react'
import { Link } from "react-router-dom";

function ListUser({ users }) {
    return (
        <div className="App">
            <h1>LIST ACCOUNT</h1>
            {users.map((user) => {
                <h3>{user.id}</h3>
            })}
        </div>
    )
}

export default ListUser