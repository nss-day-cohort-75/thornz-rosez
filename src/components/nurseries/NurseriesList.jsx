import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getAllNurseries } from "../../services/NurseriesServices.js";
import "./Nurseries.css"

export const NurseriesList = () => {
const [allNurseries, setAllNurseries] = useState([])

useEffect(() => {
 getAllNurseries().then((nurseriesArray) => {
    setAllNurseries(nurseriesArray)
 })

},[])


return (
    <div className="nurseries-container">
    <h2>Nurseries</h2>
    <article className="nurseries" >
        {allNurseries.map(nurseriesObject => {
            return (
                <Link key={nurseriesObject.id} to={`/nurseries/${nurseriesObject.id}`}>
                <div>{nurseriesObject.name}</div>
                </Link> 
            )
        })}
    </article>
    </div>
)
}