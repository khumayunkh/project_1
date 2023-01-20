import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { getAllUsers } from "../../api/auth/authAPI";
import { IUser, IUserState } from "../../api/auth/interfaces";



// -------------------------------------- INITIAL STATE -----------------------------------------------------
const initialState: IUserState = {
    userIsLoading: false
}


// -------------------------------------- THUNKS -----------------------------------------------------
export const getAllUsersThunk = createAsyncThunk(
    'getAllUsers',
    async(_, {dispatch}) => {
        const response = await getAllUsers()
        dispatch(authActions.setUsers(response.data))
    }
)



// -------------------------------------- REDUCERS -----------------------------------------------------
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsers(state: IUserState, action: PayloadAction<IUser>){
            state.users = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsersThunk.pending, (state: IUserState) => {
            state.userIsLoading = true
        })
        builder.addCase(getAllUsersThunk.fulfilled, (state: IUserState) => {
            state.userIsLoading = false
        })
        builder.addCase(getAllUsersThunk.rejected, (state: IUserState, action: any) => {
            state.userIsLoading = false
            state.userErrorMessage = action.error.message
        })
    }
})


export const authActions = authSlice.actions
export const authReducers = authSlice.reducer