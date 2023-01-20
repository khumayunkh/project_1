import { configureStore } from '@reduxjs/toolkit';
import { authReducers } from '../reducers/auth/authReducer';
import { clothingShopReducers } from '../reducers/products/clothingStoreReducer';
import { usersReducers } from '../reducers/users/usersReducer';

const store = configureStore({
  reducer: {
    products: clothingShopReducers,
    users: usersReducers,
    auth: authReducers
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;