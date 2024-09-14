import BrowseLayout from '@/components/Layouts/BrowseLayout/Index'
import MovieCard from '@/components/Modules/BrowsePage/MovieCard/Index'
import { LIST_VIDEO_RECOMMENDATION, } from '@/constants/dummyVideo'
import { idMovieAtom } from '@/jotai/atoms'
import EachUtils from '@/utils/EachUtils'
import { useAtom } from 'jotai'
import React, { useState } from 'react'

const Favorite = () => {
    const [isHover, setIsHover] = useState(false)
    const [, setIdMovie] = useAtom(idMovieAtom)

    return (
        <BrowseLayout>
            <div className='mt-20 px-8'>
                <h3 className='text-white font-bold text-2xl '> My Favorite Movies</h3>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 px-8 py-8 '>
                <EachUtils
                    of={LIST_VIDEO_RECOMMENDATION}
                    render={(item, index) => (
                        <div key={index}>
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
                        </div>
                    )}
                />
            </div>

        </BrowseLayout>
    )
}

export default Favorite