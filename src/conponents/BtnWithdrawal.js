import React, { useState } from "react";

function WithdrawBtn({ value, setAmount, isFocus, isSetFocus, amount }) {
    const handleAmount = () => {
        setAmount(value);
        console.log(amount);
    };

    return (
        <input
            type="button"
            value={value}
            style={{ width: '150px' }}
            className={`btn btn-primary ${isFocus === false && value === amount ? "btn btn-danger" : ""
                } `}
            onClick={() => handleAmount()}
        />
    );
}

export default WithdrawBtn;