import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/Navbar"
import { useState, useEffect } from "react"
// import { Nurserylist } from "../components/nurseries/NurseriesList"
// import {  } from "../components/nurseries/NurseriesList"



export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
      const localLearningUser = localStorage.getItem("learning_user")
      const learningUserObject = JSON.parse(localLearningUser)
      setCurrentUser(learningUserObject)
    }, [])

    return <>
        <Routes>
        <Route path="/" element={
                <>
                    <NavBar currentUser={currentUser}/>
                    <Outlet />
                </>
                    }
                >
                    <Route path="nursery" element={<NurseryList />} />


            </Route>
        </Routes>
    </>
}