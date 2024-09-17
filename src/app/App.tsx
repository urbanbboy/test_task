import { Box } from "@mui/material";
import { Routing } from "./providers/routerProvider/ui/Routing";
import { Header } from "@widgets/Header";

function App() {
    return (
        <Box>
            <Header />
            <Box mt={'100px'}>
                <Routing />
            </Box>
        </Box>
    )
}

export default App;