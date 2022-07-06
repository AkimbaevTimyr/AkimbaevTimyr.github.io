export interface UserState {
    isAuth: boolean;
    user: IUser;
}

export type IUser = {
    email: string | null;
}