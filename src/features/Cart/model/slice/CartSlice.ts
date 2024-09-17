import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItem, CartState } from "../types/Cart"



const initialState: CartState = {
    items: [],
}

export const CartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if(existingItem) {
                existingItem.quantity += action.payload.quantity
            } else {
                state.items.push(action.payload)
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        updateQuantity: (state, action: PayloadAction<{id: number; quantity: number}>) => {
            const item = state.items.find(item => item.id === action.payload.id)
            if(item) {
                item.quantity = action.payload.quantity
            }
        }
    }
})

export const { actions: CartActions } = CartSlice
export const { reducer: CartReducer } = CartSlice