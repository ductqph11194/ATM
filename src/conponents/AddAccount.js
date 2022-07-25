import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
const AddAccount = ({ onAdd, categories }) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onHandleSubmit = (data) => {
        const uploads = new FormData();
        uploads.append("name", data.name);
        uploads.append("phone", data.phone);
        uploads.append("balance", data.balance);
        uploads.append("accountNumber", data.accountNumber);
        uploads.append("pin", data.pin);
        onAdd(data)
        console.log(data);
    }
    return (
        <div>
            <div className="d-flex justify-content-between items-center">
                <div className="mt-3">
                    <button onClick={() => navigate(-1)} className="btn btn-primary">Quay lại</button>
                </div>
            </div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-floating mb-3 mt-3">
                    <input type="text"
                        className="form-control"
                        id="name"
                        placeholder="Tên sản phẩm"
                        {...register('name', { required: true })}
                    />
                    <label htmlFor="name">Tên</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="phone"
                        placeholder="phone"
                        {...register('phone', { required: true })}
                    />
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="product-desc"
                        placeholder="Balance"
                        {...register('balance', { required: true })}
                    /> <label htmlFor="phone">Balance</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="accountNumber"
                        placeholder="Acc Name"
                        {...register('accountNumber', { required: true })}
                    />
                    <label htmlFor="phone">Account Number</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text"
                        className="form-control"
                        id="pin"
                        placeholder="Chi tiết sản phẩm"
                        {...register('pin', { required: true })}
                    />
                    <label htmlFor="phone">Pin</label>
                </div>
                <button type="submit" className="btn btn-primary">THÊM</button>
            </form>
        </div >
    )
}

export default AddAccount
