import React, { useEffect, useContext } from 'react'
import { TitleText } from '../context/MainContext';

function Surplus() {
    const { setTitle } = useContext(TitleText);
    useEffect(() => {
        setTitle("SURPLUS");
    }, []);
    return (
        <div>Surplus</div>
    )
}

export default Surplus