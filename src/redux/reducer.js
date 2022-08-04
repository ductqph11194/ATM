import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useContext } from "react";


export const userSlice = createSlice({
    name: "account",
    initialState: { status: "", users: [], user: {}, account: '', header: { recentlyAction: "", balance: "" }, textStatus: "", withdraw: {}, transfer: {}, balance: {}, },
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
            .addCase(getBalanceUser.fulfilled, (state, action) => {
                state.status = "idle";
                state.balance = action.payload;
            })
            .addCase(createWithdraw.pending, (state, action) => {
                state.status = "Loading";
            })
            .addCase(createWithdraw.fulfilled, (state, action) => {
                state.status = "idle";
                state.header.recentlyAction = `(bạn vừa rút ${action.payload.amount} $)`
                state.withdraw = action.payload;
            })
            .addCase(createTransfer.pending, (state, action) => {
                state.status = "Loading";
            })
            .addCase(createTransfer.fulfilled, (state, action) => {
                state.status = "idle";
                state.header.recentlyAction = `(bạn vừa chuyển ${action.payload.result.amount} $)`
                state.transfer = action.payload;
            })
            .addCase(signIn.pending, (state, action) => {
                state.status = "Loading";
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.status = "idle";
                state.account = action.payload;
                console.log(state.account);
                localStorage.setItem('token', state.account)
            })

    },
});

export const getUser = createAsyncThunk("account/getUser", async (id) => {
    const res = await axios.get(`http://localhost:4000/api/account/${id}`);
    return res.data;
});

export const getListUser = createAsyncThunk("account/getListUser", async () => {
    const token = localStorage.getItem('token')
    console.log(token);
    const res = await axios.get(`http://localhost:4000/api/accounts`, {
        method: "POST",
        headers: {
            "auth-token": token
        }
    });
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

export const signIn = createAsyncThunk("user/register", async (user) => {
    const res = await axios.post(`http://localhost:4000/login`, user)
    return res.data;
})

export const getBalanceUser = createAsyncThunk(
    "user/getBalanceUser",
    async (id) => {
        const res = await axios.get(
            `http://localhost:4000/api/account/${id}/balance-inquiry`
        );
        return res.data;
    }
);

export const createTransfer = createAsyncThunk("user/createTransfer", async (newTransaction) => {
    const res = await axios.post(`http://localhost:4000/api/transfer`,
        newTransaction)
    return res.data
})

export const selectUser = (state) => state.user.user;

export const getUsers = (state) => state.user.users;

export const updateBalance = (state) => state.withdraw;

export const selectBalance = (state) => state.user.balance;

export const getTextUpdate = (state) => state.user.header;

export const getToke = (state) => state.user.account;

export default userSlice.reducer;
