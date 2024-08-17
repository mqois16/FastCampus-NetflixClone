import React from 'react'
import Navbar from '../../../pages/Landing/Navbar'

const DefaultLayout = ({ children }) => {
    return (
        <div className=''>
            <Navbar />
            {children}</div>
    )
}

export default DefaultLayout