import { configureStore } from '@reduxjs/toolkit';
import { clothingShopReducers } from '../reducers/products/clothingStoreReducer';
import { usersReducers } from '../reducers/users/usersReducer';

const store = configureStore({
  reducer: {
    products: clothingShopReducers,
    users: usersReducers
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;