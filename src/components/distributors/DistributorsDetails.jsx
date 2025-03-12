import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDistributorsAndRetailers } from "../../services/DistributorsServices.js";
import { getAllDistributorNurseries } from "../../services/DistributorsServices.js";
import { getFlowerNursery } from "../../services/NurseriesServices.js";
import "./Distributors.css";

export const DistributorsDetails = () => {
  const { distributorId } = useParams();
  const [distributor, setDistributor] = useState({});
  const [nurseryDistributors, setNurseryDistributors] = useState([])
  const [nurseryFlowers, setNurseryFlowers] = useState([])

  useEffect(() => {
    getDistributorsAndRetailers(distributorId).then((data) => {
      setDistributor(data);
    });
  }, [distributorId]);

  useEffect(() => {
    getAllDistributorNurseries(distributorId).then(data => {
        setNurseryDistributors(data) 
    })
}, [distributorId])

useEffect(() => {
    if (nurseryDistributors.length > 0) {
        Promise.all(
            nurseryDistributors.map(flower => getFlowerNursery(flower.nurseryId) )).then(results => {
            setNurseryFlowers(results.flat()) 
        })
    }
}, [nurseryDistributors])

  return (
    <div className="detail-container">
      <div className="detail-distributor-container">
        <div className="distributor-detail-header">
          <h2 className="distributor-detail-header-item">
           {distributor.name}
          </h2>
        </div>
        <div className="detail-flower-container">

                <section className="distributor-detail-flower-container">
                    {nurseryFlowers.map(flower => { 
                        return (
                            <div className="flower-container" key={flower.flower.id}>
                                <p className="flower-item">{flower.flower.color}</p>
                                <p className="flower-item">{flower.flower.species}</p>
                                <p className="flower-item">{flower.price}</p>                          
                            </div>)})}
                </section>
            </div>
            <div className="distributor-details-retail">
            <h1>Retailers :</h1>
            </div>
        <div className="distributor-details-retail">{distributor?.retailers?.map(retailer=>{
            return retailer.name
        })}</div>
      </div>
    </div>
  );
};
