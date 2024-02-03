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
            return state;
        },
        logoutUser: (state, _) => {
            state.isLoggedIn = false;
            state.user = null;
            return state;
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice.reducer;