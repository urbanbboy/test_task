import { FavoriteProductsPage } from '@pages/FavoriteProductsPage';
import { ProductsPage } from '@pages/ProductsPage';
import { ProfilePage } from '@pages/ProfilePage';
import { ReactNode } from "react";

export enum RouteName {
    PRODUCTS_PAGE = '/',
    FAVORITE_PRODUCTS_PAGE= '/favorites',
    PROFILE_PAGE = '/profile',
    NOT_FOUND_PAGE = '*'
}

export interface Route {
    path: string;
    element?: ReactNode;
    private: boolean;
}

export const routeConfig: Route[] = [
    {
        path: RouteName.PRODUCTS_PAGE,
        element: <ProductsPage/>,
        private: false
    },
    {
        path: RouteName.PROFILE_PAGE,
        element: <ProfilePage/>,
        private: false
    },
    {
        path: RouteName.FAVORITE_PRODUCTS_PAGE,
        element: <FavoriteProductsPage/>,
        private: false
    }
]