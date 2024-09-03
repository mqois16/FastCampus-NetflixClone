import { LIST_VIDEOS } from '@/constants/dummyVideo'
import EachUtils from '@/utils/EachUtils'
import React, { useState } from 'react'
import MovieCard from '../MovieCard/Index'

const MovieList = ({ title }) => {
    const [isHover, setIsHover] = useState(false)
    const [idMovie, setIdMovie] = useState(null)
    return (
        <section className='px-8 py-4'>
            <h3 className='text-2xl font-semibold mb-2'>{title}</h3>
            <div className='grid grid-cols-4 gap-2'>
                <EachUtils
                    of={LIST_VIDEOS}
                    render={(item, index) => (
                        <div
                            className='h-48 w-full'
                            key={index}
                            onMouseEnter={() => {
                                setIsHover(true)
                                setIdMovie(item.id)
                            }}
                            onMouseLeave={() => {
                                setIsHover(false)
                                setIdMovie(null)
                            }}
                        >
                            <MovieCard
                                data={item}
                                isHover={isHover}
                                idMovie={idMovie}
                            />
                        </div>
                    )}
                />
            </div>
        </section>
    )
}

export default MovieList