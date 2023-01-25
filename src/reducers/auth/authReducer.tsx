import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { deleteUser, login, addNewUser } from "../../api/auth/authAPI";
import { ILogin, IUser, IUserState } from "../../api/auth/interfaces";


// -------------------------------------- INITIAL STATE -----------------------------------------------------
const initialState: IUserState = {
    userIsLoading: false,
    userIsAuth: false
}


// -------------------------------------- THUNKS -----------------------------------------------------
export const loginThunk = createAsyncThunk(
    'login',
    async(data: ILogin, {dispatch}) => {
        const response = await login(data)
        dispatch(authActions.setLogin(response.data))
    }
) 

export const addNewUserThunk = createAsyncThunk(
    'addNewUser',
    async(data: IUser, {dispatch}) => {
        const response = await addNewUser(data)
    }
)

export const deleteUserThunk = createAsyncThunk(
    'deleteUser',
    async(id: string, {dispatch}) => {
        const response = await deleteUser(id)
    }
)

// -------------------------------------- REDUCERS -----------------------------------------------------
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin(state: IUserState, action: PayloadAction<number>){
            state.me = action.payload
        },
        setDelete(state: IUserState, action: PayloadAction<number[]>){
            state.users = state.users?.filter((user:any) => user.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, (state: IUserState) => {
            state.userIsLoading = true
        })
        builder.addCase(loginThunk.fulfilled, (state: IUserState) => {
            state.userIsLoading = false
            state.userIsAuth = true
        })
        builder.addCase(loginThunk.rejected, (state: IUserState, action: any) => {
            state.userIsLoading = false
            state.userErrorMessage = action.error.message
        })
    }
})


export const authActions = authSlice.actions
export const authReducers = authSlice.reducer