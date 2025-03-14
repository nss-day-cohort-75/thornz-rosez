import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/Navbar"
import { useState, useEffect } from "react"
import { NurseriesList } from "../components/nurseries/NurseriesList"
import { DistributorsList } from "../components/distributors/DistributorsList"
import { RetailersList } from "../components/retailers/RetailersList"
import { RetailerDetails } from "../components/retailers/RetailersDetails"
import { ShoppingCart } from "../components/shoppingCart/ShoppingCart"
import { DistributorsDetails } from "../components/distributors/DistributorsDetails.jsx"
import { NurseriesDetails } from "../components/nurseries/NurseriesDetails.jsx"



export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})
    const [cartNum, setCartNum] = useState(0)

    useEffect(() => {
        const localCustomer = localStorage.getItem("customer")
        const customerObject = JSON.parse(localCustomer)
        setCurrentUser(customerObject)
    }, [])

    return <>
        <Routes>
            <Route path="/" element={
                <>
                    <NavBar cartNum={cartNum} />
                    <Outlet />
                </>}>
                <Route index element={<RetailersList />} />
                <Route path="nursery" element={<NurseriesList />} />
                <Route path="nursery/:nurseryId" element={<NurseriesDetails />} />
                <Route path="distributor" element={<DistributorsList />} />
                <Route path="distributor/:distributorId" element={<DistributorsDetails />} />
                <Route path="retailer" element={<RetailersList />} />
                <Route path="/retailer/:retailerId" element={<RetailerDetails currentUser={currentUser} setCartNum={setCartNum}/>} />
                <Route path="my-cart" element={<ShoppingCart currentUser={currentUser} />} />
            </Route>
        </Routes>
    </>
}