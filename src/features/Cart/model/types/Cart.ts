
export interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
    image: string;
}

export interface CartState {
    items: CartItem[];
}