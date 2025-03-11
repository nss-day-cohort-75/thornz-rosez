import React from "react"
import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { Login } from "./components/Auth/login"
import { Register } from "./components/Auth/Register"
import { DistributorsList } from "./components/distributors/DistributorsList.jsx"
import { NurseriesList } from "./components/nurseries/NurseriesList"
import { RetailersList } from "./components/retailers/RetailersList.jsx"

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews/>
          </Authorized>
        }
      />
    </Routes>
  )
}
