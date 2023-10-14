import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import CropManagementPage from '../CropManagementPage/CropManagementPage'
import Mymap from '../../components/mymap/Mymap'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'


function HomePage() {
  return (
    <>
    <div className='flex flex-col gap-20'>
    <NavBar/>
    <Breadcrumbs/>
    <CropManagementPage/>
    
    </div>
    
    </>
  )
}

export default HomePage