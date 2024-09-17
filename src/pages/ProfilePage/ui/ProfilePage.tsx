import { Box, Typography } from "@mui/material";

const ProfilePage = () => {
    return (
        <Box
            sx={{
                height: '80dvh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography variant="h3">
                Эта страница будет доступна после обновления {':)'}
            </Typography>

        </Box>
    )
}

export default ProfilePage;