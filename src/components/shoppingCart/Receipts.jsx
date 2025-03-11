import { useEffect, useState } from "react"
import { getDistributorById, getNurseryFlowersByIds } from "../../services/ShoppingCartServices"

export const Receipts = ({ receipt }) => {
    const [distributor, setDistributor] = useState({})
    const [nursery, setNursery] = useState({})
    const [flowerPrice, setFlowerPrice] = useState(0)

    useEffect(() => {
        getDistributorById(receipt?.retailer?.distributorId).then((res) => {
            setDistributor(res)
        })
    }, [receipt])

    useEffect(() => {
        if (distributor && distributor["nursery-distributors"]) {
            distributor["nursery-distributors"].forEach(joinTable => {
                getNurseryFlowersByIds(receipt.flowerId, joinTable.nurseryId).then((res) => {
                    if (res.length > 0) {
                        setNursery(res[0])
                    }
                })
            })
        }
    }, [distributor])

    useEffect(() => {
        if (nursery.price > 0) {
            setFlowerPrice((nursery.price * (1 + distributor.markup + receipt.retailer.markup)).toFixed(2))
        }
    }, [nursery])


    return (
        <div className="row">
            <div>{receipt.flower.color} {receipt.flower.species}</div>
            <div className="quantity">1</div>
            <div>${flowerPrice}</div>
        </div>
    )
}