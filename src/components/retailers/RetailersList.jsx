import { useEffect, useState } from "react"
import { getAllRetailers } from "../../services/RetailersServices.js"
import "./Retailers.css"
import { Link } from "react-router-dom"

export const RetailersList = () => {
    const [retailers, setRetailers] = useState([])
    
        useEffect(()=>{
            getAllRetailers().then(retailerArray=>{
                setRetailers(retailerArray)
            })
        },[])
    
        return(
          <section className="retailers-container">
            <h2>Retailers</h2>
            <div className="retailers" >
            {retailers.map(retailer=>{
                return(
                    <Link to={`/retailer/${retailer.id}`}><div key={retailer.id} >{retailer.name}</div></Link>
                    )
                })}
                </div>
          </section>
        )
}