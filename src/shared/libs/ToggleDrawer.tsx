import { useState } from "react"

export const ToggleDrawer = () => {
    const [open, setOpen] = useState<boolean>(false)
    const toggleDrawer = () => {
        setOpen(!open)
    }
    
    return {
        open,
        toggleDrawer
    }
}
