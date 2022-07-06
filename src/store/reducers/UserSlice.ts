import { createSlice } from "@reduxjs/toolkit";
import { IUser, UserState } from "../../types/UserTypes";
import { addUser, exit } from "../actions/UserActionCreator";


const initialState: UserState = {
    isAuth: false,
    user: {
        email: '',
    },
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: {
        [addUser.fulfilled.type]: (state, action) =>{
            state.user = action.payload;
            state.isAuth = true;
        },
        [exit.fulfilled.type]: (state, action) =>{
            state.user = {email: ""};
            state.isAuth = action.payload;
        }
    }
})



export default userSlice.reducer;