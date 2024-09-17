import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { RouteName } from '@app/providers/routerProvider';
import { Link } from '@mui/material';
import { ToggleDrawer } from '@shared/libs/ToggleDrawer';
import { CartDrawer } from '@widgets/Cart';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '@features/Cart';
import { roundPrice } from '@shared/libs/roundPrice';

export const Header = () => {
    const { open, toggleDrawer } = ToggleDrawer()
    const totalPrice = useSelector(getTotalPrice)

    return (
        <AppBar
            sx={{
                bgcolor: 'white',
                boxShadow: 'none',
                borderBottom: '1px solid #EAEAEA',
                p: '10px 0 10px 0',
            }}
        >
            <Container fixed>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', padding: "0 50px 0 50px" }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href={RouteName.PRODUCTS_PAGE}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            textDecoration: 'none',

                        }}
                    >
                        <img src="/assets/logo.svg" alt="Logo" />
                        <Box pl={'16px'}>
                            <Box
                                sx={{
                                    letterSpacing: '-1px',
                                    textTransform: 'uppercase',
                                    color: '#212121',
                                    fontSize: '20px',
                                    fontWeight: '700',
                                }}
                            >
                                Kross store
                            </Box>
                            <Box sx={{ color: '#9D9D9D', fontSize: '14px' }}>Магазин лучших кроссовок</Box>
                        </Box>
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            display: {
                                xs: 'none',
                                md: 'flex'
                            },
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#5C5C5C',
                            gap: '10px'
                        }}
                        >
                            <Box
                                component={'div'}
                                onClick={() => toggleDrawer()}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px',
                                    cursor: 'pointer'
                                }}
                            >
                                <img src="/assets/basket.svg" alt="basket" />
                                <span>{roundPrice(totalPrice)} руб.</span>
                            </Box>
                            <Link
                                href={RouteName.FAVORITE_PRODUCTS_PAGE}
                                underline={'none'}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: '#5C5C5C',
                                }}>
                                <img src="/assets/liked.svg" alt="liked" />
                                <span>Закладки</span>
                            </Link>
                            <Link
                                href={RouteName.PROFILE_PAGE}
                                underline={'none'}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: '#5C5C5C',
                                }}
                            >
                                <img src="/assets/profile.svg" alt="profile" />
                                <span>Профиль</span>
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
            <CartDrawer  open={open} toggleDrawer={toggleDrawer} />
        </AppBar >
    );
}