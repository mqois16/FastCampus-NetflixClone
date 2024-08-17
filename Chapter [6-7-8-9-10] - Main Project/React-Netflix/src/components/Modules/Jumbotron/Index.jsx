import React from 'react'
import { JUMBOTRON_IMAGE } from "../../../constants/listAsset"
import { LIST_JUMBOTRON_EN, LIST_JUMBOTRON_ID } from "../../../constants/listJumbotron"
import EachUtils from '../../../utils/EachUtils'
import { languageAtom } from '../../../jotai/atoms'
import { useAtom } from 'jotai'
import InputMembership from '../InputMembership/Index'

const Jumbotron = () => {
    const [language] = useAtom(languageAtom)
    return (
        <div>
            <img
                src={JUMBOTRON_IMAGE}
                alt='BG'
                className='absolute top-0 left-0 object-cover h-[700px] w-[100%] opacity-60'
            />
            <EachUtils
                of={language == "id" ? LIST_JUMBOTRON_ID : LIST_JUMBOTRON_EN}
                render={(item, index) => (
                    <div key={index} className='relative flex flex-col justify-center items-center mt-44 gap-4 text-center px-4'>
                        <h1 className='font-black text-white text-5xl'>{item.title}</h1>
                        <p className='text-white text-xl'>{item.desc}</p>
                        <InputMembership />
                    </div>

                )}
            />
        </div>
    )
}

export default Jumbotron