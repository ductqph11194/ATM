import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const userSlice = createSlice({
    name: "account",
    initialState: { status: "", users: [], user: {}, account: '', transaction: [], header: { recentlyAction: "", balance: "" }, textStatus: "", withdraw: {}, transfer: {}, balance: {}, },
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
            .addCase(getTransaction.pending, (state, action) => {
                state.status = "Loading";
            })
            .addCase(getTransaction.fulfilled, (state, action) => {
                state.status = "idle";
                state.transaction = action.payload;
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
                state.account = action.payload.token;
                localStorage.setItem('token', state.account)
            })
            .addCase(changePin.pending, (state, action) => {
                state.status = "Loading";
            })
            .addCase(changePin.fulfilled, (state, action) => {
                state.status = "idle";
                console.log(action.payload);
                state.account = action.payload.token;
            })

    },
});

export const getUser = createAsyncThunk("account/getUser", async () => {
    const token = localStorage.getItem('token')
    const res = await axios.get(`http://localhost:4000/api/account`, {
        method: "POST",
        headers: {
            "auth-token": token
        }
    });
    return res.data;
});

export const getTransaction = createAsyncThunk("account/getTransaction", async () => {
    const token = localStorage.getItem('token')
    const res = await axios.get(`http://localhost:4000/api/get-transaction`, {
        method: "POST",
        headers: {
            "auth-token": token
        }
    });
    return res.data;
});

export const getListUser = createAsyncThunk("account/getListUser", async () => {

    const token = localStorage.getItem('token')
    const res = await axios.get(`http://localhost:4000/api/accounts`, {
        method: "POST",
        headers: {
            "auth-token": token
        }
    });
    return res.data;

});

export const createWithdraw = createAsyncThunk("user/createWithdraw", async (newTransaction) => {
    const token = localStorage.getItem('token')
    const res = await axios.post(
        `http://localhost:4000/api/withdraw`,
        newTransaction, {
        method: "POST",
        headers: {
            "auth-token": token
        }
    }
    );
    return res.data;
}
);

export const signIn = createAsyncThunk("user/sigIn", async (user) => {
    const res = await axios.post(`http://localhost:4000/auth/login`, user)
    return res.data;
})

export const changePin = createAsyncThunk("user/changePin", async (pin) => {
    const token = localStorage.getItem('token')
    const res = await axios.put(`http://localhost:4000/api/change-pin`, pin, {
        method: "POST",
        headers: {
            "auth-token": token
        }
    })
    return res.data;
})

export const register = createAsyncThunk("user/register", async (user) => {
    const res = await axios.post(`http://localhost:4000/auth/register`, user)
    return res.data;
})

export const getBalanceUser = createAsyncThunk(
    "user/getBalanceUser",
    async () => {
        const token = localStorage.getItem('token')
        const res = await axios.get(
            `http://localhost:4000/api/account/balance-inquiry`, {
            method: "POST",
            headers: {
                "auth-token": token
            }
        }
        );
        return res.data;
    }
);

export const createTransfer = createAsyncThunk("user/createTransfer", async (newTransaction) => {
    const token = localStorage.getItem('token')
    const res = await axios.post(`http://localhost:4000/api/transfer`,
        newTransaction, {
        method: "POST",
        headers: {
            "auth-token": token
        }
    })
    return res.data
})

export const selectUser = (state) => state.user.user;

export const getListTransaction = (state) => state.user.transaction;

export const getUsers = (state) => state.user.users;

export const updateBalance = (state) => state.withdraw;

export const selectBalance = (state) => state.user.balance;

export const getTextUpdate = (state) => state.user.header;


export default userSlice.reducer;
