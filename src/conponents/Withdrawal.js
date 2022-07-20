import React, { useEffect, useContext } from 'react'
import { TitleText } from '../context/MainContext';

function Withdrawal() {
    const { setTitle } = useContext(TitleText);
    useEffect(() => {
        setTitle("WITHDRAWAL");
    }, []);
    return (
        <div>Withdrawal</div>
    )
}

export default Withdrawal