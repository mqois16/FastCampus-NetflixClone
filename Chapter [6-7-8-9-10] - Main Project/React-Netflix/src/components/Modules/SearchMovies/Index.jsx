import { idMovieAtom, isFetchingAtom, searchMoviesAtom } from '@/jotai/atoms'
import EachUtils from '@/utils/EachUtils'
import { searchMovie } from '@/utils/searchMovies'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import MovieCard from '../BrowsePage/MovieCard/Index'

const SearchMovies = () => {
    const [isHover, setIsHover] = useState(false)
    const [, setIdMovie] = useAtom(idMovieAtom)
    const [searchQuery] = useAtom(searchMoviesAtom)

    const [movieList, setMovieList] = useState([])
    const [, setIsFetching] = useAtom(isFetchingAtom)

    useEffect(() => {
        if (searchQuery) {
            searchMovie({ query: searchQuery }).then(result => {
                setIsFetching(true)
                setMovieList(result)
            }).finally(() => {
                setTimeout(() => {
                    setIsFetching(false)
                }, 500)
            })
        }
    }, [searchQuery])

    return (
        <div className='grid grid-cols-4 p-8 mt-10 gap-4'>
            <EachUtils
                of={movieList}
                render={(item, index) => (
                    <div
                        className='h-72 mt-4'
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
        </div>
    )
}

export default SearchMovies