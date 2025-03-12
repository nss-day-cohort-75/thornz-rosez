export const getAllDistributors = () => {
    return fetch ('http://localhost:8088/distributors').then(res=> res.json())
}

export const getAllDistributorNurseries = (id) => {
    return fetch (`http://localhost:8088/nursery-distributors?id=${id}&_expand=nursery&_expand=distributor`).then(res=> res.json())
}

export const getDistributorsAndRetailers = (id) => {
    return fetch(`http://localhost:8088/distributors/${id}?&_embed=retailers`).then(res=>res.json())
}