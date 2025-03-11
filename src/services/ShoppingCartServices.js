export const PostShoppingCart = (cart) => {
    return fetch('http://localhost:8088/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
    })
}