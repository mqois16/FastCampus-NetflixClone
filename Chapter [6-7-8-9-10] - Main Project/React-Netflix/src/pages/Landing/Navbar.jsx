import React from 'react'
import { useAtom } from 'jotai'
import { languageAtom } from '../../jotai/atoms'
import OptionLanguage from '../../components/Modules/OptionLanguage'
import DefaultButton from '../../components/Modules/DefaultButton/Index'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()


    return (

        <header>
            <nav className='flex justify-between items-center pr-10 pl-7 py-4'>
                <div>
                    <img src='../../public/netflix-logo.png' alt='netflix logo' width={140} />
                </div>
                <div className='flex items-center gap-4'>
                    <OptionLanguage />
                    <DefaultButton text={"Sign In"} onClick={() => navigate("/login")} />
                </div>
            </nav>
        </header>
    )
}
