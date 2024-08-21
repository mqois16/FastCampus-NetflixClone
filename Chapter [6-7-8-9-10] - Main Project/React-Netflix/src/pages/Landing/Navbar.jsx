import React from 'react'
import { useAtom } from 'jotai'
import { languageAtom } from '../../jotai/atoms'
import OptionLanguage from '../../components/Modules/OptionLanguage'
import DefaultButton from '@/components/Modules/DefaultButton/Index'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()


    return (

        <header className='relative z-20'>
            <nav className='flex flex-wrap justify-between items-center pr-10 pl-7 py-4'>
                <div>
                    <img src='/netflix-logo.png' alt='netflix logo' width={140} />
                </div>
                <div className='flex flex-wrap items-center gap-4'>
                    <OptionLanguage />
                    <DefaultButton text={"Sign In"} onClick={() => navigate("/login")} />
                </div>
            </nav>
        </header>
    )
}
