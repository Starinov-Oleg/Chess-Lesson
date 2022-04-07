import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../main/footer/Footer'
import HeaderContainer from './main-pages/header-container'
import pages from './pages.module.css'
interface PagesProps {
  navlinkItems: string
}
function Pages({ navlinkItems }: PagesProps) {
  return (
    <div className={`${pages.pages}`}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2 col-md-3 col-sm-3'>
            <HeaderContainer navlinkItems={navlinkItems} />
          </div>
          <div className={`col-lg-10 col-md-9 col-sm-9 col-12 ${pages.color}`}>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Pages
