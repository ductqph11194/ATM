import React from "react";
import { Link } from "react-router-dom";


function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="surplus" className="nav-link">
                                    SURPLUS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="withdrawal" className="nav-link">
                                    WITHDRAWAL
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`transfer`} className="nav-link">
                                    TRANSFER
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`change-PIN`} className="nav-link">
                                    CHANGE PIN
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Menu;
