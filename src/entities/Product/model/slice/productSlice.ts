import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductsState {
    searchQuery: string;
}

const initialState: ProductsState = {
    searchQuery: ''
};

const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { actions: productActions } = productsSlice;
export const { reducer: productReducer } = productsSlice;