import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './uiSlice';
import contactReducer from './contactSlice';

export const store = configureStore({
    reducer: {
        ui : uiReducer,
        contact : contactReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;