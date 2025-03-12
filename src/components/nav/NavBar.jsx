import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"
import { useEffect, useState } from "react"
import { getCartByCustomerId } from "../../services/ShoppingCartServices"

export const NavBar = ({currentUser}) => {
    const [cartNum, setCartNum] = useState(0)
    const navigate = useNavigate()

    useEffect(()=>{
        getCartByCustomerId(currentUser.id).then((res) => {
            setCartNum(res.length)
        })
    }, [currentUser])

    return (
        <div className="navbar-container">
            <ul className="navbar-list">
            <Link to="/nursery"><li>Nurseries</li></Link>
            <Link to="/distributor"><li>Distributors</li></Link>
            <Link to="/retailer"><li>Retailers</li></Link>
            <Link to="/my-cart"><li>My Cart ({cartNum})</li></Link>
            {localStorage.getItem("customer") ? (
        
            <Link
            
            to=""
            onClick={() => {
                localStorage.removeItem("customer")
                navigate("/login", { replace: true })
            }}
            ><li>Logout</li>
            </Link>
        ) : (
        ""
        )}
    </ul>
</div>
    )
}
