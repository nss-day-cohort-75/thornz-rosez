import { useEffect, useState } from "react";
import { getFlowerNursery } from "../../services/NurseriesServices.js";
import "./Nurseries.css"
import { useParams } from "react-router";
import { getAllNurseryDistributorsById } from "../../services/NurseriesServices.js";

export const NurseriesDetails = () =>{

const [allNurseryFlowers, setAllNurseryFlowers] = useState([])
const [allDistributors, setAllDestributors] = useState([])

const { nurseryId } = useParams()

useEffect(() => {
    getFlowerNursery(nurseryId).then(data =>{
        const nurseryObj = data
        setAllNurseryFlowers(nurseryObj)
    })
}, [nurseryId]
)

useEffect(() => {
    getAllNurseryDistributorsById(nurseryId).then(data =>{
        const nurseryObj = data
        setAllDestributors(nurseryObj)
    })
}, [nurseryId]
)

return (
    
    <div className="detail-container">
        <h2 className="Title">{allNurseryFlowers[0]?.nursery?.name}</h2>
         <div className="detail-distributor-container">
         <div className="distributor-detail-header">
            
         
    <div className="retail-detail-flower-container"> 
                   
                  
                   </div>
                   {allNurseryFlowers.map(nurseryFlowerObject => {
            return (
                <div className="flower-container">
                    <span className="flower-item">Color:{nurseryFlowerObject?.flower?.color}  
                </span>
                <div>
                    <span className="flower-info">Species:{nurseryFlowerObject?.flower?.species}  
                </span>
                </div>
                <div>
                    <span className="flower-info">Price:{nurseryFlowerObject?.price}  
                </span>
                </div>
                </div>  
            )
        })}        
                
                </div> 
                <h3 className="distributors">Distributors:</h3>
                <div className="">{allDistributors.map(distributorObject => {
            return (
                
                <div>
                    <span className="distributor-details-retail">{distributorObject?.distributor?.name}</span>
                </div>
            )
        
        })}
        </div>
        </div>
        </div> 
        
)}