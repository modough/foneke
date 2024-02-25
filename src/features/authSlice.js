import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, verifyEmail } from "./fetchLocalApi";



const initialState = {
    token: null,
    pseudo: null,
    email: null,
    id: null,
    isVerify: false,
    emailToken: null,
    isLoading: false,
    error: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        createUser: (registerUser, (state, action) => {
            const { pseudo, email, _id, isVerify, emailToken } = action.payload
            state.pseudo = pseudo
            state.email = email
            state.id = _id
            state.isVerify = isVerify
            state.emailToken = emailToken
            state.isLoading = true

        }),
        logout: () => {
            return initialState
        },
        updateUser: (verifyEmail, (state, action) => {
            console.log(action)
            state.isVerify = action.payload.isVerify
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log(action)
                state.token = action.payload.token
                state.pseudo = action.payload.pseudo
                state.email = action.payload.email
                state.id = action.payload.playerid
                state.token = action.payload.token
                state.isVerify = action.payload.isVerify
                state.error = action.payload.error
            })
            .addCase(loginUser.rejected, (state) => {
                state.token = null;
                state.pseudo = null;
                state.id = null;
            })
    }
});


export const { createUser, logout, login, updateUser } = authSlice.actions
export default authSlice.reducer;