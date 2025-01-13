import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Laygout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Laygout