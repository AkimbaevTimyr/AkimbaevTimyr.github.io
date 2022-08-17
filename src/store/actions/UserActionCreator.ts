import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../firebase-config";
import { IUser } from "../../types/UserTypes";
import { getFavoriteMovies } from "./MovieActionCreator";


export const addUser = createAsyncThunk(
    'user/addUser',
    async(user: IUser, thunkAPI) =>{
        try{
            return user
        }catch(e){

        }
    }
)



// export const exit = createAsyncThunk(
//     'user/exit',
//     async(isAuth: boolean, thunkAPI) =>{
//         try{
//             return isAuth
//         }catch(e){

//         }
//     }
// )
export const checkToken = createAsyncThunk(
    "user/checkToken",
    async(args: any[], thunkAPI) => {
        const [token = '', email = ''] = args;
        try{
            if(token?.length != 0){
                thunkAPI.dispatch(setIsAuth(true))
                thunkAPI.dispatch(getFavoriteMovies(email))
            }
        }catch(e){

        }
    }
)
export const setIsAuth = createAsyncThunk(
    "user/setIsAuth",
    async(isAuth: boolean, thunkAPI) =>{
        try{
            return isAuth
        }catch(e){

        }
    }
)



export const login = createAsyncThunk(
    "user/login",
    async(user: IUser, thunkAPI) => {
        try{
            thunkAPI.dispatch(addUser(user))
            thunkAPI.dispatch(setIsAuth(true))
            thunkAPI.dispatch(getFavoriteMovies(user.email))
            localStorage.setItem('token', user.token)
            localStorage.setItem('email', user.email)
        }catch(e){
     
        }
    }
)

