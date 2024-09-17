import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { CartActions } from "@features/Cart/model/slice/CartSlice";
import { useSelector } from "react-redux";
import { selectIsItemInCart } from "@features/Cart";
import { RootState } from "@app/providers/storeProvider";
import { toast } from "react-toastify";

interface ProductListCardProps {
    id: number;
    price: number;
    name: string;
    image: string;
}

export const ProductListCard = (props: ProductListCardProps) => {
    const {
        id,
        name,
        price,
        image,
    } = props
    const isAddedToCart = useSelector((state: RootState) => selectIsItemInCart(state, id))
    const dispatch = useAppDispatch()

    const addToCart = async () => {
        const item = { id, name, price, image, quantity: 1 }
        await dispatch(CartActions.addToCart(item))
        toast.success('Товар добавлен в корзину')
    }

    return (
        <Card
            sx={{
                position: 'relative',
                maxWidth: "220px",
                maxHeight: '280px',
                border: '1px solid #F3F3F3',
                borderRadius: "40px",
            }}
        >
            <CardActionArea>
                <CardActions sx={{ position: 'absolute' }}>
                    <IconButton>
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
                <Box sx={{ padding: '25px' }}>
                    <CardMedia
                        sx={{ cursor: 'pointer' }}
                        component={"img"}
                        image={image}
                        alt={name}
                    />
                </Box>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', pt: 0 }}>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            lineHeight: '1.1',
                            fontSize: '14px'
                        }}
                    >
                        {name}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '7px', pl: '8px', pr: '8px' }}>
                        <Box>
                            <Box sx={{ textTransform: 'uppercase', color: '#BDBDBD' }}>Цена</Box>
                            <Box sx={{ fontWeight: 700, fontSize: '16px' }}>{price} руб.</Box>
                        </Box>
                        <IconButton
                            sx={{
                                height: '32px',
                                width: '32px',
                                border: '1px solid #D3D3D3',
                                borderRadius: '8px'
                            }}
                            onClick={addToCart}
                            disabled={isAddedToCart}
                        >
                            {isAddedToCart
                                ? <CheckBoxIcon sx={{ color: "#9DD458" }} />
                                : <AddIcon sx={{ color: "#D3D3D3" }} />
                            }
                        </IconButton>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
