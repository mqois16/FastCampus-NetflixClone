import BrowseLayout from '@/components/Layouts/BrowseLayout/Index'
import React from 'react'
import { GoChevronLeft } from 'react-icons/go'
import ReactPlayer from 'react-player'
import { useNavigate, useParams } from 'react-router-dom'

const Watch = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <BrowseLayout>
            <button
                onClick={() => navigate("/browse")}
                className='absolute top-20 left-6 hover:text-white transition-all cursor-pointer'>
                <GoChevronLeft size={44} />
            </button>
            <ReactPlayer
                url={"https://youtube.com/watch?v=" + id}
                width={"100%"}
                height={"100vh"}
                playing={true}
                muted={false}
                controls={false}
            />
        </BrowseLayout>)
}

export default Watch