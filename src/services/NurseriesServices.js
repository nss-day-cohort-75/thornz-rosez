export const getAllNurseries = () => {
    return fetch("http://localhost:8088/nurseries?_embed=nursery-flowers").then((res) => res.json())
}

export const getFlowerNursery = (nurseryId) => {
    return fetch(`http://localhost:8088/nursery-flowers?nurseryId=${nurseryId}&_expand=flower&_expand=nursery`).then((res) => res.json())
}

export const getAllNurseryDistributorsById = (nurseryId) => {
    return fetch(`http://localhost:8088/nursery-distributors?nurseryId=${nurseryId}&_expand=distributor`).then((res) => res.json())
}