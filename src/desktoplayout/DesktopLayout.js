import React from 'react'
import Sidebar from '../components/Sidebar'
import Body from './Body'

const DesktopLayout = () => {
  return (
    <div className='grid grid-flow-col bg-sky-100 h-screen w-full'>
      <Sidebar/>
      <Body/>
    </div>
  )
}

export default DesktopLayout