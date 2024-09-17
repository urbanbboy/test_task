import { Route, Routes } from "react-router-dom"
import { routeConfig } from "../config/routeConfig"

export const Routing = () => {
    return (
        <Routes>
            {routeConfig.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )
            })}
        </Routes>
    )
}
