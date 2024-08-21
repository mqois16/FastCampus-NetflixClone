import Navbar from '@/pages/Browse/Navbar'
import React from 'react'

const BrowseLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div >
                {children}
            </div>
        </>
    )
}

export default BrowseLayout