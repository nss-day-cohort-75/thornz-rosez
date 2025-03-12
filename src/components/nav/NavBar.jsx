import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"
import { useEffect, useState } from "react"

export const NavBar = ({cartNum}) => {
    const [renderCartNum, setRenderCartNum] = useState(0)
    const navigate = useNavigate()

    useEffect(()=>{
        setRenderCartNum(cartNum)
    }, [cartNum])

    return (
        <div className="navbar-container">
            <ul className="navbar-list">
            <Link to="/nursery"><li>Nurseries</li></Link>
            <Link to="/distributor"><li>Distributors</li></Link>
            <Link to="/retailer"><li>Retailers</li></Link>
            <Link to="/my-cart"><li>My Cart ({renderCartNum})</li></Link>
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
