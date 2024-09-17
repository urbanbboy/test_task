import { useGetProductListQuery } from "../model/api/productApi"
import { Box, Container } from "@mui/material"
import { ProductListCard } from "./ProductListCard"
import { Loader } from "@shared/ui/Loader"
import { useSelector } from "react-redux"
import { getSearchQuery } from "../model/selectors/getSearchQuery"

export const ProductList = () => {
    const { data: products, isLoading, error: productsError } = useGetProductListQuery(32)
    const searchQuery = useSelector(getSearchQuery)

    const filteredProducts = products?.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    pl: '70px',
                    pr: '70px',
                    flexWrap: 'wrap',
                    gap: '30px'
                }}
            >
                {filteredProducts?.map((product) => {
                    return (
                        <ProductListCard
                            key={product.id}
                            id={product.id}
                            price={product.price}
                            name={product.name}
                            image={product.image}
                        />
                    )
                })}
            </Box>
            {isLoading && <Loader />}
            {productsError &&
                <Box
                    sx={{
                        height: '100dvh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    Ошибка при загрузке товаров
                </Box>}
        </Container>
    )
}
