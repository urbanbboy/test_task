import { RootState } from "@app/providers/storeProvider";


export const getTotalPrice = (state: RootState): number => {
    return state.cartReducer.items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}