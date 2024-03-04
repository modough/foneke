import { createSlice } from "@reduxjs/toolkit";
import { loginUser, verifyEmail } from "./fetchLocalApi";



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
                state.email = action.payload.email
                state.token = action.payload.token
                state.isVerify = action.payload.isVerify
                state.error = action.payload.message
            })
            .addCase(loginUser.rejected, () => {
                return initialState
            })
    }
});


export const { logout, login, updateUser } = authSlice.actions
export default authSlice.reducer;