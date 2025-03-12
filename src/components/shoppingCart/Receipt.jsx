import { useEffect, useState } from "react"
import { getDistributorById, getFlowerNumByIds, getNurseryFlowersByIds } from "../../services/ShoppingCartServices"

export const Receipt = ({ receipt }) => {
    const [distributor, setDistributor] = useState({})
    const [nursery, setNursery] = useState({})
    const [flowerPrice, setFlowerPrice] = useState('No Price Found')
    const [amount, setAmount] = useState(1)

    useEffect(() => {
        getDistributorById(receipt?.retailer?.distributorId).then((res) => {
            setDistributor(res)
        })

        getFlowerNumByIds(receipt.customerId, receipt.flowerId).then((res) => {
            setAmount(res.length)
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
            <div className="quantity">{amount}</div>
            <div>${(flowerPrice * amount).toFixed(2)}</div>
        </div>
    )
}