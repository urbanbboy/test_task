import { RootState } from "@app/providers/storeProvider";

export const getCartList = (state: RootState) => state.cartReducer.items