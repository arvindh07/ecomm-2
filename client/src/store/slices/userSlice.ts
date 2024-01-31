import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userInfo",
    initialState: {
        isLoggedIn: false,
        user: null
    },
    reducers: {
        loginUser: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logoutUser: (state, _) => {
            state.isLoggedIn = false;
            state.user = null;
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice.reducer;