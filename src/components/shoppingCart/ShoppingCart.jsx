import { useEffect, useState } from "react"
import "./ShoppingCart.css"
import { getCartByCustomerId } from "../../services/ShoppingCartServices"
import { Receipts } from "./Receipts"

export const ShoppingCart = ({ currentUser }) => {
    const [receipts, setReceipts] = useState([])

    useEffect(() => {
        getCartByCustomerId(currentUser.id).then((res) => {
            setReceipts(res)
        })

    }, [currentUser])

    return (
        <div className="shopping-cart-container">
            <div className="shopping-cart-card">
                <h2>Shopping Cart</h2>
                <div className="shopping-cart">
                    {receipts.map(receipt => {
                        return <Receipts receipt={receipt} key={receipt.id}/>
                    })}
                </div>
            </div>
        </div>
    )
}