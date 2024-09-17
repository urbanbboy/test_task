import { Box, Button, Typography } from "@mui/material"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { ToggleDrawer } from "@shared/libs/ToggleDrawer";

export const EmptyCart = () => {
    const { toggleDrawer } = ToggleDrawer()

    return (
        <Box
            sx={{
                height: '80dvh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center'
            }}
        >
            <img src="/assets/box.png" alt="empty" />
            <Typography variant={'h4'}>Корзина пустая</Typography>
            <Typography variant="body2" color={'#999'}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</Typography>
            <Box>
                <Button
                    variant="contained"
                    color="success"
                    startIcon={<KeyboardBackspaceIcon />}
                    sx={{ borderRadius: '16px', padding: '17px', mt: '20px' }}
                    onClick={toggleDrawer}
                >
                    Вернуться назад
                </Button>
            </Box>
        </Box>
    )
}
