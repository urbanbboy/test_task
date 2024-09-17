import { CartList, Checkout, getTotalPrice } from "@features/Cart";
import { Box, Drawer } from "@mui/material"
import { useSelector } from "react-redux";


interface CartDrawerProps {
    open: boolean;
    toggleDrawer: () => void;
}

export const CartDrawer = (props: CartDrawerProps) => {
    const { open, toggleDrawer } = props
    const totalPrice = useSelector(getTotalPrice)

    return (
        <Drawer anchor={'right'} open={open} onClose={toggleDrawer}>
            <Box sx={{ width: '430px' }}>
                <CartList />
                {totalPrice > 0 && <Checkout />}
            </Box>
        </Drawer>
    )
}
