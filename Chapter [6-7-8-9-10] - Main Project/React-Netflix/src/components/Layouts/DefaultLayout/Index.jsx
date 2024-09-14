import React from 'react'
import Navbar from '@/pages/Landing/Navbar'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '@/utils/firebase'
import Loading from '@/components/Modules/Elements/Loading'

const DefaultLayout = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)
    if (loading) return <Loading />
    if (error) return <p>Error...</p>
    if (user) return location.replace("/browse")

    return (
        <div className='absolute bg-black h-full w-full'>
            <Navbar />
            {children}</div>
    )
}

export default DefaultLayout