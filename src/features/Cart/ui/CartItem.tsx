import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid2,
    IconButton
} from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { CartActions } from "../model/slice/CartSlice";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { toast } from "react-toastify";

interface CartItemProps {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export const CartItem = (props: CartItemProps) => {
    const { id, name, price, image, quantity } = props
    const dispatch = useAppDispatch()

    const handleDeleteCartItem = async () => {
        await dispatch(CartActions.removeItem(id))
        toast.error('Товар удален из корзины')
    }

    const handleChangeCartItem = async (id: number, quantity: number) => {
        await dispatch(CartActions.updateQuantity({ id, quantity }))
    }

    return (
        <Card
            sx={{
                mb: '20px',
                position: 'relative',
                maxWidth: "370px",
                maxHeight: '170px',
                border: '1px solid #F3F3F3',
                borderRadius: "20px",
            }}
        >
            <Grid2
                container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: "flex-start",
                    padding: '20px'
                }}
            >
                <Grid2 size={3}>
                    <CardMedia
                        component={'img'}
                        image={image}
                        alt={name}
                        width={'70px'}
                        height={'70px'}
                    />
                </Grid2>
                <Grid2 size={7}>
                    <CardContent sx={{ fontSize: '16px' }}>
                        <Box>{name}</Box>
                        <Box sx={{ fontWeight: '700' }}>{price} руб.</Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px', mt: '7px' }}>
                            <IconButton
                                onClick={() => handleChangeCartItem(id, quantity - 1)}
                                sx={{
                                    border: '1px solid #DBDBDB',
                                    borderRadius: '8px',
                                    bgcolor: '#FF7A83'
                                }}
                            >
                                <RemoveIcon />
                            </IconButton>
                            <Box sx={{ fontSize: '18px', fontWeight: '700' }}>{quantity}</Box>
                            <IconButton
                                onClick={() => handleChangeCartItem(id, quantity + 1)}
                                sx={{
                                    border: '1px solid #DBDBDB',
                                    borderRadius: '8px',
                                    bgcolor: '#9DD458'
                                }}
                            >
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Grid2>
                <Grid2 size={2}>
                    <Box sx={{ mt: '90px', ml: '10px' }}>
                        <IconButton onClick={handleDeleteCartItem} sx={{ border: '1px solid #DBDBDB', borderRadius: '10px' }}>
                            <ClearIcon />
                        </IconButton>
                    </Box>
                </Grid2>
            </Grid2>
        </Card>
    )
}
