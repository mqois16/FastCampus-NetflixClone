import React from 'react'
import SectionLayout from '@layouts/SectionLayout/Index'
import { DOWNLOAD_COVER_IMAGE, DOWNLOAD_PHONE_IMAGE } from '@/constants/listAsset'
import EachUtils from '@/utils/EachUtils'
import { LIST_CONTENT_2_EN, LIST_CONTENT_2_ID } from '@/constants/listContent'
import { useAtom } from 'jotai'
import { languageAtom } from '@/jotai/atoms'

const SectionDownload = () => {
    const [language] = useAtom(languageAtom)
    return (
        <SectionLayout>
            <div className='relative max-w-xl mx-auto'>
                <img className='relative' src={DOWNLOAD_PHONE_IMAGE} />
                <div className='absolute bottom-8 left-1/2 -translate-x-1/2 bg-black border border-white flex items-center rounded-xl px-4 py-2 w-[60%] gap-4'>
                    <img
                        src={DOWNLOAD_COVER_IMAGE}
                        className='max-h-20' />
                    <div className='flex flex-col'>
                        <p className='font-bold'>Stranger Things</p>
                        <p className='text-blue-400 font-semibold'>Download...</p>
                    </div>
                </div>
            </div>
            <EachUtils
                of={language == 'en' ? LIST_CONTENT_2_EN : LIST_CONTENT_2_ID}
                render={(item, index) => (
                    <div key={index}>
                        <h2 className='text-5xl font-black'>{item.title}</h2>
                        <p className='text-2xl mt-4'>{item.desc}</p>
                    </div>
                )} />
        </SectionLayout>
    )
}

export default SectionDownload