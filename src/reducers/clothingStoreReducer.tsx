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
        dispatch(clothingShopActions.setProducts(response.data))
    }
)


// -------------------------------------- REDUCERS -----------------------------------------------------
export const clothingShopSlice = createSlice({
    name: 'clothingShop',
    initialState,
    reducers: {
        setProducts(state: IProductsState, action: PayloadAction<IProducts>) {
            state.products = action.payload
        },

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProductsThunk.pending, (state: IProductsState) => {
            state.productsIsLoading = true
        })
        builder.addCase(getAllProductsThunk.fulfilled, (state: IProductsState) => {
            state.productsIsLoading = false
        })
        builder.addCase(getAllProductsThunk.rejected, (state: IProductsState, action: any) => {
            state.productsIsLoading = false
            state.productsErrorMessage = action.error.message
        })
    }
})


export const clothingShopActions = clothingShopSlice.actions
export const clothingShopReducers = clothingShopSlice.reducer