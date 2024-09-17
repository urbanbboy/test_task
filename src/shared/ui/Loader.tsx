import { Box, CircularProgress } from "@mui/material"

export const Loader = () => {
    return (
        <Box sx={{ height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress />
        </Box>
    )
}
