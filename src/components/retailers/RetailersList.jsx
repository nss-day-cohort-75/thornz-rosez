import { useEffect, useState } from "react"
import { getAllRetailers } from "../../services/RetailersServices.js"
import "./Retailers.css"

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
                        <div key={retailer.id} >{retailer.name}</div>
                    )
                })}
                </div>
          </section>
        )
}