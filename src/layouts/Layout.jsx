import React from 'react'
import Header from '../components/Header';

const Layout = ({children}) => {
  return (
    <div className='w-[70%] mx-auto'>
        <Header/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout;