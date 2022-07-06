import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types/UserTypes";

export const addUser = createAsyncThunk(
    'user/addUser',
    async(user: IUser, thunkAPI) =>{
        try{
            return user
        }catch(e){

        }
    }
)


export const exit = createAsyncThunk(
    'user/exit',
    async(isAuth: boolean, thunkAPI) =>{
        try{
            return isAuth
        }catch(e){

        }
    }
)