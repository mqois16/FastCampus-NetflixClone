import { LIST_NAVBAR } from '@/constants/listNavbar'
import EachUtils from '@/utils/EachUtils'
import React from 'react'

const Navbar = () => {
    return (
        <headerc className='relative'>
            <nav className='bg-transparent fixed text-white top-0 left-0 px-8 w-full z-10'>
                <div className='flex justify-between items-center '>
                    <div className='flex items-center gap-4'>
                        <img src='./netflix-logo.png'
                            className='w-[120px] ml-2' />
                        <ul className='flex items-center gap-4'>
                            <EachUtils
                                of={LIST_NAVBAR}
                                render={(item, index) => (
                                    <li key={index}>
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                )}
                            />
                        </ul>

                    </div>
                    <div>

                    </div>
                </div>
            </nav>
        </headerc>
    )
}

export default Navbar