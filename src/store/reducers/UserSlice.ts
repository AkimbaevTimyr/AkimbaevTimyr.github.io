import { createSlice } from "@reduxjs/toolkit";
import { IUser, UserState } from "../../types/UserTypes";
import { addUser, setIsAuth } from "../actions/UserActionCreator";


const initialState: UserState = {
    isAuth: false,
    user: {
        email: '',
        token: '',
        id: null
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
        [setIsAuth.fulfilled.type]: (state, action) =>{
            console.log(action.payload)
            state.isAuth = action.payload
        },
       
    }
})



export default userSlice.reducer;