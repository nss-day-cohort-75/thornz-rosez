export const getAllRetailers = () => {
    return fetch('http://localhost:8088/retailers').then(res=>res.json())
}