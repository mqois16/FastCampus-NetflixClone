import React, { useRef } from 'react'
import { GoChevronRight, GoChevronLeft } from 'react-icons/go'

const CarouselLayout = ({ children }) => {
  const ref = useRef(null)

  const scroll = (offset) => {
    ref.current.scrollLeft += offset
  }

  return (
    <div className='relative overflow-hidden'>
      <div className='flex justify-between absolute left-0 w-full h-full'>
        <button
          onClick={() => scroll(-500)}
          className='z-10 hover:bg-blue-900/50 text-white text-center opacity-75 transition-all ease-in-out duration-300 h-48 w-10 mt-4'>
          <GoChevronLeft size={32} />
        </button>
        <button
          onClick={() => scroll(500)}
          className='z-10 hover:bg-blue-900/50 text-white text-center opacity-75 transition-all ease-in-out duration-300 h-48 w-10 mt-4'>
          <GoChevronRight size={32} />
        </button>
      </div>
      <div
        ref={ref}
        className='carousel relative scroll-smooth space-x-2'>
        {children}
      </div>
    </div>
  )
}

export default CarouselLayout