import { createAsyncThunk } from "@reduxjs/toolkit";

const serverUrl = "http://localhost:3001/api";

// Function to handle common fetch logic
const fetchWrapper = async (url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};

// Action creator for registering a player
export const registerUser = createAsyncThunk('registerPlayer', async (registerInfos) => {
    return fetchWrapper(`${serverUrl}/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registerInfos)
    });
});

// Action creator for logging in a player
export const loginUser = createAsyncThunk('loginPlayer', async (loginInfos) => {
    return fetchWrapper(`${serverUrl}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginInfos)
    });
});

// Function to verify email
export const verifyEmail = async (emailToken) => {
    return fetchWrapper(`${serverUrl}/verify-email`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ emailToken })
    });
};