import { useSelector } from "react-redux"
import { getCartList } from "../model/selectors/getCartList"
import { CartItem } from "./CartItem"
import { Box, Typography } from "@mui/material"
import { EmptyCart } from "@shared/ui/EmptyCart"


export const CartList = () => {
    const cartList = useSelector(getCartList)

    return (
        <Box
            margin={"30px"}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '90dvh',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    mb: '30px',
                    fontWeight: '700',
                    letterSpacing: '-1px',
                    fontSize: '24px'
                }}
            >
                Корзина
            </Typography>
            {cartList.length < 1
                ? <EmptyCart />
                : cartList.map((item) => {
                    return (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    )
                })
            }
        </Box>
    )
}
