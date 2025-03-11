export const getCartByCustomerId = (id) => {
    return fetch(`http://localhost:8088/cart?customerId=${id}&_expand=retailer&_expand=flower`).then((res) => res.json())
}

export const getDistributorById = (id) => {
    return fetch(`http://localhost:8088/distributors/${id}?_embed=nursery-distributors`).then((res) => res.json())
}

export const getNurseryFlowersByIds = (flowerId, nurseryId) => {
    return fetch(`http://localhost:8088/nursery-flowers?flowerId=${flowerId}&nurseryId=${nurseryId}`).then((res) => res.json())
}
export const PostShoppingCart = (cart) => {
    return fetch('http://localhost:8088/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
    })
}