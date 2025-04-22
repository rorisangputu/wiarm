import React from 'react'
import Header from '../components/Header';

const Layout = ({children}) => {
  return (
    <div className='relative'>
        <Header/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout;