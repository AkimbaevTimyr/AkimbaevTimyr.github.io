export interface UserState {
    isAuth: boolean | null;
    user: IUser;
}

export type IUser = {
    email: string;
    token: string;
    id: number | null;
}

export type ObjType =  {
    navigate: any;
    email: string;
    password: string;
}