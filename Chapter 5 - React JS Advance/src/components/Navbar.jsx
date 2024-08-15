import React from 'react'
import { useAtom } from 'jotai'
import { languageAtom } from '../jotai/atoms'

export default function Navbar() {
    const [, setLanguage] = useAtom(languageAtom)

    return (
        <div className='navbar'>
            <h3>Netflix Clone</h3>
            <div>
                <button onClick={() => setLanguage("id")}>Indonesia</button>
                <button onClick={() => setLanguage("en")}>English</button>
            </div>
        </div>
    )
}
