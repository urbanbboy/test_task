import { Box, Typography } from "@mui/material";

const FavoriteProductsPage = () => {
    return (
        <Box
            sx={{
                height: '80dvh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                <Typography variant="h3">
                    Функционал находится на стадии разработки {':)'}
                </Typography>
                <Typography variant="h5">
                    Дождитесь обновления
                </Typography>
            </Box>
        </Box>
    )
}

export default FavoriteProductsPage;