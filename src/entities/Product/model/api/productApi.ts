import { baseApi } from "@shared/api/rtkApi";
import { Product } from "../types/Product";


export const productApi = baseApi?.injectEndpoints({
    endpoints: (build) => ({
        getProductList: build.query<Product[], number>({
            query: (limit: number = 32) => ({
                url: `/products?limit=${limit}`,
            })
        }),
        getProductById: build.query<Product, number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'GET'
            })
        }),
    })
})

export const {
    useGetProductByIdQuery,
    useGetProductListQuery
} = productApi;