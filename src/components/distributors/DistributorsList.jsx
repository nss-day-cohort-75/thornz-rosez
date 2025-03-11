import { useEffect, useState } from "react"
import { getAllDistributors } from "../../services/DistributorsServices.js"
import "./Distributors.css"
import { Link } from "react-router-dom"

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
                    <Link to={`/distributor/${distributor.id}`}><div key={distributor.id} >{distributor.name}</div></Link>
                )
            })}
            </div>
      </section>
    )
}