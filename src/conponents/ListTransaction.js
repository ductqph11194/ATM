import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TitleText } from '../context/MainContext';
import { getTransaction, getListTransaction } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";

const ListTransaction = () => {

    const data = useSelector(getListTransaction);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { setTitle } = useContext(TitleText);

    useEffect(() => {
        setTitle(`List Transaction `);
    }, []);

    useEffect(() => {
        dispatch(getTransaction());
    }, []);

    console.log(data);
    return (
        <>
            <div style={{ width: '850px', marginLeft: '350px' }}>
                <table className="table table-success table-striped-sm">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th> Type</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((data, index) => (

                            <tr key={index}>
                                <td >{index + 1}</td>
                                <td>{data.type}</td>
                                <td>{data.amount}</td>
                                <td>{data.createdAt}</td>

                            </tr>

                        ))}
                    </tbody>
                </table>
                <div className="mt-3" style={{ marginLeft: '750px' }}>
                    <button onClick={() => navigate(-1)} className="btn btn-primary">Back</button>
                </div>
            </div>
        </>
    )
}

export default ListTransaction