import { useEffect, useState } from "react"
import "./ShoppingCart.css"
import { getCartByCustomerId } from "../../services/ShoppingCartServices"
import { Receipt } from "./Receipt"

export const ShoppingCart = ({ currentUser }) => {
    const [receipts, setReceipts] = useState([])
    const [flowers, setFlowers] = useState([])

    useEffect(() => {
        getCartByCustomerId(currentUser.id).then((res) => {
            setReceipts(res)
        })
    }, [currentUser])

    useEffect(()=>{
        setFlowers([...new Map(receipts.map(item => [item.flowerId, item])).values()])
    }, [receipts])

    return (
        <div className="shopping-cart-container">
            <div className="shopping-cart-card">
                <h2>Shopping Cart</h2>
                <div className="h3s">
                    <h3>Flowers</h3>
                    <h3>Amount</h3>
                    <h3>Price</h3>
                </div>
                <div className="shopping-cart">
                    <div className="top-row">
                        <div>Flowers</div>
                        <div className="quantity">Quantity</div>
                        <div>Price</div>
                    </div>
                    {flowers.map(receipt => {
                        return <Receipt receipt={receipt} key={receipt.id} />
                    })}
                </div>
            </div>
        </div>
    )
}