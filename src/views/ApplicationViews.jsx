import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/Navbar"
import { useState, useEffect } from "react"
import { NurseriesList } from "../components/nurseries/NurseriesList"
import { DistributorsList } from "../components/distributors/DistributorsList"
import { RetailersList } from "../components/retailers/RetailersList"


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
      const localCustomer = localStorage.getItem("customer")
      const customerObject = JSON.parse(localCustomer)
      setCurrentUser(customerObject)
    }, [])

    return <>
        <Routes>
        <Route path="/" element={
                <>
                    <NavBar currentUser={currentUser}/>
                    <Outlet />
                </>}>
                    <Route path="nursery" element={<NurseriesList/>} />
                    {/* <Route path="nursery:Id" element={<NurseriesDetails/>} /> */}
                    <Route path="distributor" element={<DistributorsList/>} />
                    {/* <Route path="distributor:Id" element={<DistributorsDetails/>} /> */}
                    <Route path="retailer" element={<RetailersList/>} />
                    {/* <Route path="retailer:Id" element={<RetailersDetails/>} /> */}
                    {/* <Route path="cart" element={<ShoppingCart />} /> */}
            </Route>
        </Routes>
    </>
}