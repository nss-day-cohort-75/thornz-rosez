export const getAllNurseries = () => {
    return fetch("http://localhost:8088/nurseries?_embed=nursery-flowers").then((res) => res.json())
}