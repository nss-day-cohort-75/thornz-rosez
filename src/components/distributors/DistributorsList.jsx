import { useEffect, useState } from "react"
import { getAllDistributors } from "../../services/DistributorsServices.js"
import "./Distributors.css"

export const DistributorsList = () => {

    const [distributors, setDistributors] = useState([])

    useEffect(()=>{
        getAllDistributors().then(distributorArray=>{
            setDistributors(distributorArray)
        })
    },[])

    return(
      <section className="distributors-container">
        <h2>Distributors</h2>
        <div className="distributors" >
        {distributors.map(distributor=>{
            return(
                    <div key={distributor.id} >{distributor.name}</div>
                )
            })}
            </div>
      </section>
    )
}