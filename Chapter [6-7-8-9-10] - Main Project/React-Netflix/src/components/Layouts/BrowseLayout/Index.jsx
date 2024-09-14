import Loading from '@/components/Modules/Elements/Loading'
import Navbar from '@/pages/Browse/Navbar'
import { auth } from '@/utils/firebase'
import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth"

const BrowseLayout = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)
    if (loading) return <Loading />
    if (error) return <p>Error...</p>
    if (!user) return location.replace("/")
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