import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import couterSlice from "./features/couterSlice"; 
import {userApi} from "./service/userApi";
//este es para esuchar solicitudes http
import { setupListeners } from "@reduxjs/toolkit/query";

  export const store = configureStore({
    reducer : {
        couterSlice , 
        [userApi.reducerPath] : userApi.reducer
    } , 
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([userApi.middleware])
})

setupListeners(store.dispatch);

//aqui estoy importnaod los tipos de datos que hay en el estado 
export type RootState = ReturnType<typeof  store.getState>
export type AppDispatch = typeof store.dispatch
