import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useContext } from "react";


export const userSlice = createSlice({

    name: "account",
    initialState: { status: "", users: [], user: {}, textStatus: "", withdraw: {} },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state, action) => {
                state.status = "Loading";
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.status = "idle";
                state.user = action.payload;
            })
            .addCase(getListUser.pending, (state, action) => {
                state.status = "Loading";
            })
            .addCase(getListUser.fulfilled, (state, action) => {
                state.status = "idle";
                state.users = action.payload;
            })
            .addCase(createWithdraw.pending, (state, action) => {
                state.status = "Loading";
            })
            .addCase(createWithdraw.fulfilled, (state, action) => {
                state.status = "idle";
                state.textStatus = "bạn vừa rút "
                state.withdraw = action.payload;
            })
    },
});

export const getUser = createAsyncThunk("account/getUser", async (id) => {
    const res = await axios.get(`http://localhost:4000/api/account/${id}`);
    return res.data;
});

export const getListUser = createAsyncThunk("account/getListUser", async () => {
    const res = await axios.get(`http://localhost:4000/api/accounts`);
    return res.data;
});
export const createWithdraw = createAsyncThunk("user/createWithdraw", async (newTransaction) => {
    const res = await axios.post(
        `http://localhost:4000/api/withdraw`,
        newTransaction
    );
    return res.data;
}
);

export const selectUser = (state) => state.user.user;
export const getUsers = (state) => state.user.users;
export const updateBalance = (state) => state.withdraw;
export const getTextUpdate = (state) => state.user.textStatus;

export default userSlice.reducer;
