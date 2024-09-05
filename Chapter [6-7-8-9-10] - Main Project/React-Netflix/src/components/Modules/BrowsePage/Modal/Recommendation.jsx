import { LIST_VIDEO_RECOMMENDATION } from '@/constants/dummyVideo'
import { idMovieAtom } from '@/jotai/atoms'
import EachUtils from '@/utils/EachUtils'
import { getMoviesRecommendation } from '@/utils/getMoviesRecommendation'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { GoPlay } from 'react-icons/go'

const Recommendation = () => {
    const [idMovie,] = useAtom(idMovieAtom)
    const [moviesRecommendation, setMoviesRecommendation] = useState([])

    useEffect(() => {
        if (idMovie) {
            getMoviesRecommendation({ movie_id: idMovie }).then(result => setMoviesRecommendation(result))
        }
    }, [idMovie])

    return (
        <div className='px-5 py-2'>
            <h2 className='text-2xl font-bold'>Movie Recommendation</h2>
            <div className='grid grid-cols-3 gap-2 mt-4'>
                <EachUtils
                    of={moviesRecommendation}
                    render={(item, index) => (
                        <div key={index} className='w-full h-auto cursor-pointer rounded-md bg-[#141414]'>
                            <div className='relative'>
                                <img src={import.meta.env.VITE_BASE_URL_TMDB_IMG + item.poster_path} className='w-full h-48 rounded-t-md' />
                                <button className='absolute top-10 left-1/2 -translate-x-1/2'>
                                    <GoPlay size={44} />
                                </button>
                            </div>
                            <div className='p-2'>
                                <div className='flex gap-2 justify-between'>
                                    <p>{item.release_date}</p>
                                    <p className='text-green-400/90'>{item.vote_average}</p>
                                </div>
                                <p className='text-wrap pt-2 max-h-32 overflow-y-scroll'>{item.overview}</p>
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    )
}

export default Recommendation