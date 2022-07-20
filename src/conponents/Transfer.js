import React, { useEffect, useContext } from 'react'
import { TitleText } from '../context/MainContext';

const Transfer = () => {
    const { setTitle } = useContext(TitleText);
    useEffect(() => {
        setTitle("TRANSFER");
    }, []);
    return (
        <div>Transfer</div>
    )
}

export default Transfer