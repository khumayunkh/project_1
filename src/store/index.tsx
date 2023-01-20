import { configureStore } from '@reduxjs/toolkit';
import { clothingShopReducers } from '../reducers/products/clothingStoreReducer';

const store = configureStore({
  reducer: {
    products: clothingShopReducers
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;