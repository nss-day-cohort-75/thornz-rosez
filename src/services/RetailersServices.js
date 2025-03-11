export const getAllRetailers = () => {
    return fetch('http://localhost:8088/retailers').then(res=>res.json())
}
export const getretailerDetails = (id) => {
    return fetch(`http://localhost:8088/retailers?id=${id}&_expand=distributor`).then(res=>res.json())
}