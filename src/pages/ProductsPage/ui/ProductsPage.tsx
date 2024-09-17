import { ProductList } from "@entities/Product"
import { SearchProducts } from "@features/SearchProducts"
import { Box, Container, Typography } from "@mui/material"

const ProductsPage = () => {
    return (
        <Box>
            <Box>
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '30px 70px 30px 70px',
                        }}
                    >
                        <Typography variant="h4">Все Кроссовки</Typography>
                        <SearchProducts />
                    </Box>
                </Container>
                <ProductList />
            </Box>
        </Box>
    )
}

export default ProductsPage