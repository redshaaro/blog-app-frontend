import React from 'react'
import Sidebar from '../../../components/sidebar/Sidebar'
import Singlepost from '../../../components/Singlepost/Singlepost'
import './Single.css'

const Single = () => {
  return (
    <div className='single'>
      <Singlepost className="sp"></Singlepost>


      <Sidebar className="sb"></Sidebar>
    
    
    </div>
  )
}

export default Single