export const getAllDistributors = () => {
    return fetch ('http://localhost:8088/distributors').then(res=> res.json())
}