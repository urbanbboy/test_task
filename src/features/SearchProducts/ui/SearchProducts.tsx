import { Box, IconButton, InputBase, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { ChangeEvent } from "react";
import { productActions } from "@entities/Product";

export const SearchProducts = () => {
    const dispatch = useAppDispatch()

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(productActions.setSearchQuery(event.target.value));
    };

    return (
        <Box>
            <Paper
                component="form"
                sx={{ p: '3px 4px', display: 'flex', alignItems: 'center', width: 300 }}
            >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Поиск"
                    onChange={handleSearchChange}
                />
            </Paper>
        </Box>
    )
}