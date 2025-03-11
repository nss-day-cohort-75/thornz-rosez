import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/Navbar"
import { useState, useEffect } from "react"
import { NurseriesList } from "../components/nurseries/NurseriesList"



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
                    <Route path="nursery" element={<NurseriesList    />} />


            </Route>
        </Routes>
    </>
}