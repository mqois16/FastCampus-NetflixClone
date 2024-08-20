import React from 'react'

const SectionLayout = ({ children }) => {
    return (
        <section className='relative bg-black text-white'>
            <div className='grid sm:grid-cols-2 max-w-7xl mx-auto justify-center items-center py-16 gap-16 text-center sm:text-left'>
                {children}
            </div>
            <div className='bg-stone-900 top-0 left-0 w-full absolute h-2'>

            </div>
        </section>
    )
}

export default SectionLayout