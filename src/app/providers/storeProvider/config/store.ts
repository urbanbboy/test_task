import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "@features/Cart";
import { baseApi } from "@shared/api/rtkApi";
import { productReducer } from "@entities/Product";


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        cartReducer: CartReducer,
        productReducer: productReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch