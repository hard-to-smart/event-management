import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'
import { selectLoginUser } from './redux/slices/authSlice'
import SideNavbar from './components/SideNavbar'

const Wrapper = () => {
  const user = useSelector(selectLoginUser);
  const isAdmin = user && user.role ==='admin'
  return (
    <>
    <Header/>
    <div className='flex flex-row '>
    { isAdmin && <SideNavbar/>}
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Wrapper