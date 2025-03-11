import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"

export const NavBar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar-list">
            <Link to="/nursery"><li>Nurseries</li></Link>
            <Link to="/distributor"><li>Distributors</li></Link>
            <Link to="/retailer"><li>Retailers</li></Link>
            <Link to="/mycart"><li>My Cart</li></Link>
            {localStorage.getItem("learning_user") ? (
        
            <Link
            
            to=""
            onClick={() => {
                localStorage.removeItem("learning_user")
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
