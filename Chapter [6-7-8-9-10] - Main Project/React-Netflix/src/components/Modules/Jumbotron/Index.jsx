import React from 'react'
import { JUMBOTRON_IMAGE } from "../../../constants/listAsset"
import { LIST_JUMBOTRON_EN, LIST_JUMBOTRON_ID } from "../../../constants/listJumbotron"
import EachUtils from '../../../utils/EachUtils'
import { languageAtom } from '../../../jotai/atoms'
import { useAtom } from 'jotai'

const Jumbotron = () => {
    const [language] = useAtom(languageAtom)
    return (
        <div>
            <img
                src={JUMBOTRON_IMAGE}
                alt='BG'
                className='absolute top-0 left-0 object-cover h-[70%] '
            />
            <EachUtils
                of={language == "id" ? LIST_JUMBOTRON_ID : LIST_JUMBOTRON_EN}
                render={(item, index) => (
                    <div key={index} className='relative flex flex-col justify-center items-center mt-44'>
                        <h1 className='font-black text-white text-4xl'>{item.title}</h1>
                        <p className='text-white'>{item.desc}</p>
                    </div>

                )}
            />
        </div>
    )
}

export default Jumbotron