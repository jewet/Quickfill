import {configureStore} from '@reduxjs/toolkit';
import electricityReducer from '../slice/electricity';
import gasReducer from '../slice/gas';
import homeReducer from '../slice/home';
import accessoriesReducer from '../slice/accessories';
import ordersReducer from '../slice/orders';
import profileReducer from '../slice/profile';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    electricity: electricityReducer,
    gas: gasReducer,
    accessories: accessoriesReducer,
    orders: ordersReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
