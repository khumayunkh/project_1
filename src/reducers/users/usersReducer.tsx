import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { getAllUsers, getSingleUser, updateUser } from "../../api/auth/authAPI";
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
        dispatch(usersActions.setUsers(response.data))
    }
)

export const getSingleUserThunk = createAsyncThunk(
    'getSingleUser',
    async(id:string, {dispatch}) => {
        const response = await getSingleUser(id)
        dispatch(usersActions.setSingleUser(response.data))
    }
)
 
export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async(data: IUser, {dispatch}) => {
        const response = await updateUser(data)
    }
) 

// -------------------------------------- REDUCERS -----------------------------------------------------
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state: IUserState, action: PayloadAction<IUser>){
            state.users = action.payload
        },
        setSingleUser(state: IUserState, action: PayloadAction<IUser>){
            state.user = action.payload
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
        builder.addCase(getSingleUserThunk.pending, (state: IUserState) => {
            state.userIsLoading = true
        })
        builder.addCase(getSingleUserThunk.fulfilled, (state: IUserState) => {
            state.userIsLoading = false
        })
        builder.addCase(getSingleUserThunk.rejected, (state: IUserState, action: any) => {
            state.userIsLoading = false
            state.userErrorMessage = action.error.message
        })
        builder.addCase(updateUserThunk.pending, (state: IUserState) => {
            state.userIsLoading = true
        })
        builder.addCase(updateUserThunk.fulfilled, (state: IUserState) => {
            state.userIsLoading = false
        })
        builder.addCase(updateUserThunk.rejected, (state: IUserState, action: any) => {
            state.userIsLoading = false
            state.userErrorMessage = action.error.message
        })
    }
})


export const usersActions = usersSlice.actions
export const usersReducers = usersSlice.reducer