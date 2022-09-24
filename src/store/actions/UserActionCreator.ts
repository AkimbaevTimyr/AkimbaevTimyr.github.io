import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../firebase-config";
import { getUser } from "../../hooks/getUser/getUser";
import { setUser } from "../../hooks/setUser/setUser";
import { IUser, ObjType } from "../../types/UserTypes";
import { getFavoriteMovies } from "./MovieActionCreator";


export const addUser = createAsyncThunk(
    'user/addUser',
    async (user: IUser, thunkAPI) => {
        try {
            return user
        } catch (e) {

        }
    }
)

export const checkToken = createAsyncThunk(
    "user/checkToken",
    async (_, thunkAPI) => {
        const { email, token } = getUser()
        try {
            if (token?.length != 0) {
                thunkAPI.dispatch(setIsAuth(true))
                thunkAPI.dispatch(getFavoriteMovies(email))
            }
        } catch (e) {

        }
    }
)
export const setIsAuth = createAsyncThunk(
    "user/setIsAuth",
    async (isAuth: boolean, thunkAPI) => {
        try {
            return isAuth
        } catch (e) {

        }
    }
)

export const login = createAsyncThunk(
    "user/login",
    async (obj: ObjType, thunkAPI) => {
        const { navigate, email, password } = obj;
        try {
            signInWithEmailAndPassword(authentication, email, password)
                .then((userCredential: any) => {
                    const { user } = userCredential;
                    const u = {
                        email: user.email,
                        token: user.accessToken,
                        id: user.id
                    }
                    console.log(user.email)
                    thunkAPI.dispatch(addUser(u))
                    thunkAPI.dispatch(setIsAuth(true))
                    thunkAPI.dispatch(getFavoriteMovies(user.email))
                    setUser(user.email, user.accessToken)
                    navigate('/')
                }).catch(() => alert("Не верный логин или пароль"))
        } catch (e) {
            console.log(e)
        }
    }
)

export const register = createAsyncThunk(
    "user/register",
    async(obj: ObjType, thunkAPI) =>{
        try{
            const {navigate, email, password} = obj;
            createUserWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
                navigate('/login')
            }).catch(() => { alert('Неправельный пользователь')});
        }catch(e){
            console.log(e)
        }
    }
)

