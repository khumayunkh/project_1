import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { getAllProducts } from "../api/api";
import { IProducts, IProductsState } from "../api/interfaces";


// -------------------------------------- INITIAL STATE -----------------------------------------------------
const initialState: IProductsState = {
    productsIsLoading: false
}


// -------------------------------------- THUNKS -----------------------------------------------------
export const getAllProductsThunk = createAsyncThunk(
    'getAllProducts',
    async (_, {dispatch}) => {
        const response = await getAllProducts()
        console.log(response.data)
        dispatch(clothingShopActions.setCompany(response.data))
    }
)


// -------------------------------------- REDUCERS -----------------------------------------------------
export const clothingShopSlice = createSlice({
    name: 'clothingShop',
    initialState,
    reducers: {
        setCompany(state: IProductsState, action: PayloadAction<IProducts>) {
            state.products = action.payload
        },

    },
    extraReducers: (builder) => {
    }
})


export const clothingShopActions = clothingShopSlice.actions
export const clothingShopReducers = clothingShopSlice.reducer