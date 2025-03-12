import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getretailerDetails } from "../../services/RetailersServices"
import { getAllDistributorNurseries } from "../../services/DistributorsServices"
import { getFlowerNursery } from "../../services/NurseriesServices"
import { PostShoppingCart } from "../../services/ShoppingCartServices"

export const RetailerDetails = ({currentUser}) => {
    const { retailerId } = useParams()
    const [nurseryDistributors, setNurseryDistributors] = useState([])
    const [nurseryFlowers, setNurseryFlowers] = useState([])
    const [retailer, setRetailer] = useState({})
    const [, forceRerender] = useState(0);

    useEffect(() => {
        getAllDistributorNurseries(retailer.distributorId).then(data => {
            setNurseryDistributors(data) 
        })
    }, [retailer])

    useEffect(() => {
        if (nurseryDistributors.length > 0) {
            Promise.all(
                nurseryDistributors.map(flower => getFlowerNursery(flower.nurseryId) )).then(results => {
                setNurseryFlowers(results.flat()) 
            })
        }
    }, [nurseryDistributors])

    useEffect(() => {
        getretailerDetails(retailerId).then(data => {
            const currentRetailer = data[0]
            setRetailer(currentRetailer) 
        })
    }, [retailerId])

    const ShoppingCart = (flowerIds, flowerName) => {
        const cartItems = {
            customerId: currentUser.id,
            flowerId: parseInt(flowerIds),
            retailerId: parseInt(retailerId)
        }

        PostShoppingCart(cartItems)
        .then(() => alert(`Purchased 1 ${flowerName}`))
        .catch(err => console.error("Failed to add to cart:", err));
        forceRerender(prev => prev + 1);
    }

    return (
        <div className="detail-container">
            <div className="detail-retail-container">
                <div className="retail-detail-header">
                    <h2 className="retail-detail-header-item">{retailer.name}</h2>
                    <h3 className="retail-detail-header-item">{retailer.address}</h3>
                </div>
                <div className="retail-middle-names">
                    <section className="retail-details-nursery">
                        <h2>Distributor</h2>
                        <h3 className="retail-detail-header-item">{retailer?.distributor?.name}</h3>
                    </section>
                    <section className="retail-details-nursery">
                        <h2>Nurseries</h2>
                        {nurseryDistributors.map(data => {return <p>{data.nursery.name}</p>})}
                    </section>
                </div>
            </div>
                
                <div className="detail-flower-container">
                <section className="retail-detail-flower-container">
                    {nurseryFlowers.map(flower => { 
                        return (
                            <div className="flower-container">
                                <p className="flower-item">{flower.flower.color}</p>
                                <p className="flower-item">{flower.flower.species}</p>
                                <p className="flower-item">${flower.price}</p>
                                <button onClick={(event) => {
                                    ShoppingCart(event.target.value, event.target.id)
                                }} value={flower.flowerId} id={`${flower.flower.species}`} >Purchase</button>                            
                            </div>)})}
                </section>
            </div>
        </div>
    )
}