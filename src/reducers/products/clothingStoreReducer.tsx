import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { addNewProduct, getAllCategories, getAllProducts, getSingleCategory, getSingleProduct } from "../../api/products/productsAPI";
import { IAddNewProduct, ICategories, IProducts, IProductsState } from "../../api/products/interfaces";



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

export const getSingleProductThunk = createAsyncThunk(
    'getSingleProduct',
    async(id: string, {dispatch}) => {
        const response = await getSingleProduct(id)
        dispatch(clothingShopActions.setProduct(response.data))
    }
)

export const getAllCategoriesThunk = createAsyncThunk(
    'getAllCategories',
    async(_, {dispatch}) =>{
        const response = await getAllCategories()
        dispatch(clothingShopActions.setCategories(response.data))
    }
)


export const getSingleCategoryThunk = createAsyncThunk(
    'getSingleCategory',
    async(name: string | undefined, {dispatch}) =>{
        const response = await getSingleCategory(name)
        dispatch(clothingShopActions.setCategory(response.data))
    }
)

export const addNewProductThunk = createAsyncThunk(
    'addNewProduct',
    async(data: IAddNewProduct, {dispatch}) => {
        const response = await addNewProduct(data)
    }
)

// -------------------------------------- REDUCERS -----------------------------------------------------
export const clothingShopSlice = createSlice({
    name: 'clothingShop',
    initialState,
    reducers: {
        setProducts(state: IProductsState, action: PayloadAction<IProducts[]>) {
            state.products = action.payload
        },
        setProduct(state: IProductsState, action:PayloadAction<IProducts>){
            state.singleProduct = action.payload
        },
        setCategories(state: IProductsState, actions: PayloadAction<ICategories[]>){
            state.categories = actions.payload
        },
        setCategory(state: IProductsState, action:PayloadAction<IProducts[]>){
            state.singleCategory = action.payload
        }
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
        builder.addCase(getSingleProductThunk.pending, (state: IProductsState) => {
            state.productsIsLoading = true
        })
        builder.addCase(getSingleProductThunk.fulfilled, (state: IProductsState) => {
            state.productsIsLoading = false
        })
        builder.addCase(getSingleProductThunk.rejected, (state: IProductsState, action: any) => {
            state.productsIsLoading = false
            state.productsErrorMessage = action.error.message
        })
        builder.addCase(getAllCategoriesThunk.pending, (state: IProductsState) => {
            state.productsIsLoading = true
        })
        builder.addCase(getAllCategoriesThunk.fulfilled, (state: IProductsState) => {
            state.productsIsLoading = false
        })
        builder.addCase(getAllCategoriesThunk.rejected, (state: IProductsState, action: any) => {
            state.productsIsLoading = false
            state.productsErrorMessage = action.error.message
        })
        builder.addCase(getSingleCategoryThunk.pending, (state: IProductsState) => {
            state.productsIsLoading = true
        })
        builder.addCase(getSingleCategoryThunk.fulfilled, (state: IProductsState) => {
            state.productsIsLoading = false
        })
        builder.addCase(getSingleCategoryThunk.rejected, (state: IProductsState, action: any) => {
            state.productsIsLoading = false
            state.productsErrorMessage = action.error.message
        })
        builder.addCase(addNewProductThunk.pending, (state: IProductsState) => {
            state.productsIsLoading = true
        })
        builder.addCase(addNewProductThunk.fulfilled, (state: IProductsState) => {
            state.productsIsLoading = false
        })
        builder.addCase(addNewProductThunk.rejected, (state: IProductsState, action: any) => {
            state.productsIsLoading = false
            state.productsErrorMessage = action.error.message
        })
    }
})


export const clothingShopActions = clothingShopSlice.actions
export const clothingShopReducers = clothingShopSlice.reducer