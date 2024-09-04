import { LIST_VIDEO_RECOMMENDATION } from '@/constants/dummyVideo'
import EachUtils from '@/utils/EachUtils'
import React from 'react'
import { GoPlay } from 'react-icons/go'

const Recommendation = () => {
    return (
        <div className='px-5 py-2'>
            <h2 className='text-2xl font-bold'>Movie Recommendation</h2>
            <div className='grid grid-cols-3 gap-2 mt-4'>
                <EachUtils
                    of={LIST_VIDEO_RECOMMENDATION}
                    render={(item, index) => (
                        <div key={index} className='w-full h-auto cursor-pointer rounded-md bg-[#141414]'>
                            <div className='relative'>
                                <img src={item.image} className='w-full h-32 rounded-t-md' />
                                <button className='absolute top-10 left-1/2 -translate-x-1/2'>
                                    <GoPlay size={44} />
                                </button>
                            </div>
                            <div className='p-2'>
                                <div className='flex gap-2'>
                                    <p>{item.release_date}</p>
                                    <p>{item.runtime}</p>
                                </div>
                                <p className='text-wrap pt-2'>{item.overview}</p>
                            </div>
                        </div>
                    )}
                />
            </div>
        </div>
    )
}

export default Recommendation