export function roundPrice(price: number) {
    return Math.round(price * 100) / 100
}

export function productTax(price: number) {
    return Math.round(price  * 0.05 * 100) / 100
}