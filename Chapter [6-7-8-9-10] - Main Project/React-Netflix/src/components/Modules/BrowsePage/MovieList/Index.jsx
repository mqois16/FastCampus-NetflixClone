import EachUtils from '@/utils/EachUtils'
import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/Index'
import CarouselLayout from '@/components/Layouts/CarouselLayout/Index'
import { useAtom } from 'jotai'
import { idMovieAtom, isFetchingAtom } from '@/jotai/atoms'
import { getMoviesByType } from '@/utils/getMoviesByType'

const MovieList = ({ title, moviesType }) => {
    const [isHover, setIsHover] = useState(false)
    const [, setIdMovie] = useAtom(idMovieAtom)
    const [movieList, setMovieList] = useState([])
    const [, setIsFetching] = useAtom(isFetchingAtom)

    useEffect(() => {
        if (moviesType) {
            getMoviesByType({ moviesType }).then((result) => {
                setIsFetching(true)
                setMovieList(result)
            }).finally(() => {
                setTimeout(() => {
                    setIsFetching(false)
                }, 500)
            })
        }

    }, [moviesType])

    return (
        <section className='px-8 py-4'>
            <h3 className='text-white text-3xl font-semibold mb-2'>{title}</h3>
            <CarouselLayout>
                <EachUtils
                    of={movieList}
                    render={(item, index) => (
                        <div
                            className='carousel-item h-72 w-1/4 mt-4'
                            key={index}

                            onMouseLeave={() => {
                                setIsHover(false)
                                setIdMovie(null)
                            }}
                        >
                            <MovieCard
                                data={item}
                                isHover={isHover}
                                setIsHover={setIsHover}
                            />
                        </div>
                    )}
                />
            </CarouselLayout>
        </section>
    )
}

export default MovieList