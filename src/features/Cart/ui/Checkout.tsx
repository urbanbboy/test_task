import { Box, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../model/selectors/getTotalPrice';
import { productTax, roundPrice } from '@shared/libs/roundPrice';

export const Checkout = () => {
    const totalPrice = useSelector(getTotalPrice)

    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                padding: '20px',
                boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '10px' }}>
                <Box component={'span'} >Итого:</Box>
                <Box component={'span'} sx={{ fontWeight: '700' }}>{roundPrice(totalPrice)} руб.</Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box component={'span'} >Налог 5%:</Box>
                <Box component={'span'} sx={{ fontWeight: '700' }}>{productTax(totalPrice)} руб.</Box>
            </Box>
            <Button
                fullWidth
                variant="contained"
                color="success"
                endIcon={<ArrowForwardIcon />}
                sx={{ borderRadius: '16px', padding: '17px', mt: '20px' }}
            >
                Оформить заказ
            </Button>
        </Box>
    )
}
