import React from 'react'
import ReactPlayer from 'react-player'
import { GoPlay, GoPlusCircle, GoChevronDown } from 'react-icons/go'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { idMovieAtom, isOpenModalAtom } from '@/jotai/atoms'

const MovieCard = ({ data, isHover, setIsHover, }) => {
    const [idMovie, setIdMovie] = useAtom(idMovieAtom)
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)

    return (
        <>
            {isHover && idMovie === data.id ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0, }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: 0 }}
                    className='relative shadow-md cursor-pointer transition-all w-full'>
                    <ReactPlayer
                        url={data.videoURL}
                        playing={false}
                        loop={true}
                        muted={true}
                        width={"100%"}
                        height={"180px"}
                        controls={false}
                    />
                    <div className='h-auto bg-[#141414] flex flex-col gap-1.5'>
                        <section className='mt-1 flex justify-between'>
                            <div className='flex gap-2'>
                                <button>
                                    <GoPlay size={32} />
                                </button>
                                <button>
                                    <GoPlusCircle size={32} />
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => setIsOpenModal(true)}
                                    className='rounded-full p-1 border'>
                                    <GoChevronDown size={20} />
                                </button>
                            </div>
                        </section>
                        <section className='text-left'>
                            <h2 className='font-semibold'>{data.title}</h2>
                            <p className='text-green-400'>Popularity: {data.popularity}</p>
                        </section>
                    </div>
                </motion.div>
            ) : <img
                src={data.image}
                className='w-full max-h-48 cursor-pointer'
                onMouseEnter={() => {
                    setIsHover(true)
                    setIdMovie(data.id)
                }} />

            }

        </>

    )
}

export default MovieCard