
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { GoPlay, GoMute, GoUnmute } from 'react-icons/go'
import { useAtom } from 'jotai'
import { idMovieAtom, isOpenModalAtom } from '@/jotai/atoms'
import { getVideoUrl } from '@/utils/getVideoUrl'
import { getMoviesByType } from '@/utils/getMoviesByType'
import { useNavigate } from 'react-router-dom'

const Jumbotron = () => {
    const navigate = useNavigate()

    const [, setIdMovieAtom] = useAtom(idMovieAtom)
    const [idMovie, setIdMovie] = useState(null)

    const [, setIsOpenModal] = useAtom(isOpenModalAtom)

    const [isMute, setIsMute] = useState(true)
    const [topMovies, setTopMovies] = useState([])
    const [videoURL, setVideoUrl] = useState(null)

    useEffect(() => {
        getMoviesByType({ moviesType: "top_rated" }).then(result => {
            setTopMovies(result[0])
            setIdMovie(result[0].id)
        }).finally(() => getVideoUrl({ movie_id: idMovie }).then(result => setVideoUrl(result)))

    }, [idMovie])

    return (
        <div className='relative w-full h-[60vw]'>
            <ReactPlayer
                url={"https://youtube.com/watch?v=" + videoURL}
                width={'100%'}
                height={'100%'}
                playing={true}
                loop={true}
                muted={isMute}
                controls={false} />
            <div className='absolute top-1/2 -translate-y-1/2 left-0 p-8 max-w-xl'>
                <div className='flex flex-col  gap-4 text-white'>
                    <h1 className='text-5xl font-black '>{topMovies.title}</h1>
                    <p>{topMovies.overview}</p>
                </div>
                <div className='flex gap-4 mt-4'>
                    <button
                        className='bg-gray-200 py-2 px-8 rounded-md text-xl font-bold text-black flex items-center gap-1'
                        onClick={() => {
                            navigate("/watch/" + videoURL)
                            setIsMute(true)
                        }}
                    >
                        <GoPlay /> Play
                    </button>
                    <button
                        onClick={() => {
                            setIdMovieAtom(idMovie)
                            setIsOpenModal(true)
                        }}
                        className='bg-stone-600/80 py-2 px-8 rounded-md text-white'
                    >More Detail</button>
                </div>
            </div>
            <div className='absolute right-5 bottom-1/2 -translate-y-1/2'>
                <div className='border rounded-full p-2 cursor-pointer'
                    onClick={() => setIsMute(!isMute)}>
                    {isMute ? <GoMute size={24} /> : <GoUnmute size={24} />}
                </div>
            </div>
        </div>
    )
}

export default Jumbotron