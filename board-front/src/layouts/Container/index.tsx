import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import { AUTH_PATH } from 'constant';



export default function Container() {

    const { pathname } = useLocation();

  return (
    <>
        <Header />
        <Outlet />
        {pathname !== AUTH_PATH() && <Footer/>}
    
    </>

  )
}
