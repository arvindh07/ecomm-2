import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userInfo",
    initialState: {
        user: null
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        logoutUser: (state, _) => {
            state.user = null;
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice.reducer;