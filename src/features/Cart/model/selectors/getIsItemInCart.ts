import { RootState } from "@app/providers/storeProvider";

export const selectIsItemInCart = (state: RootState, id: number) => {
    return state.cartReducer.items.some(item => item.id === id)
}