import React from 'react'
import { useAtom } from 'jotai'
import { languageAtom } from '../../jotai/atoms'

export default function Navbar() {
    const [, setLanguage] = useAtom(languageAtom)

    return (
        <div className='navbar'>
            <h3>Netflix Clone</h3>
            <div>
                <button className='btn btn-active btn-accent mr-4 active:bg-red-500' onClick={() => setLanguage("id")}>Indonesia</button>
                <button className='btn btn-active btn-accent' onClick={() => setLanguage("en")}>English</button>
            </div>

        </div>
    )
}
