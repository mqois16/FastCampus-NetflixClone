import React from 'react'
import { useAtom } from 'jotai'
import { languageAtom } from '../../jotai/atoms'
import OptionLanguage from '../../components/Modules/OptionLanguage'

export default function Navbar() {


    return (
        <header>
            <nav className='flex justify-between items-center pr-10 pl-7 py-4'>
                <div>
                    <img src='../../public/netflix-logo.png' alt='netflix logo' width={140} />
                </div>
                <div className='flex items-center gap-4'>
                    <OptionLanguage />
                    <button>
                        Sign In
                    </button>
                </div>
            </nav>
        </header>
    )
}
