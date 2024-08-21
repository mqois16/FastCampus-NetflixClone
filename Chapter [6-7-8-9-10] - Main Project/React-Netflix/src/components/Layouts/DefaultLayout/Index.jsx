import React from 'react'
import Navbar from '@/pages/Landing/Navbar'

const DefaultLayout = ({ children }) => {
    return (
        <div className='absolute bg-black h-full w-full'>
            <Navbar />
            {children}</div>
    )
}

export default DefaultLayout