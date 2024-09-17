import { RootState } from "@app/providers/storeProvider";


export const getSearchQuery = (state: RootState) => state.productReducer.searchQuery