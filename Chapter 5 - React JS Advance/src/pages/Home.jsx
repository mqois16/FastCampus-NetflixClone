import '../App.css'
import { useAtom } from 'jotai'
import { languageAtom } from '../jotai/atoms.js'
import Layout from '../components/Layout.jsx'
import { useEffect, useState } from 'react'
import { apiInstance } from '../utils/apiInstance.js'
import { motion } from 'framer-motion'


function Home() {
  // const { article } = useArticle()
  const [language,] = useAtom(languageAtom)
  const [movies, setMovies] = useState(null)

  const fetchMyMovies = async () => {
    const response = await apiInstance.get("my-movies")
    setMovies(response.data)
  }

  console.log(movies)

  useEffect(() => {
    fetchMyMovies()
  }, [])

  return (
    <Layout>
      <header>
        <motion.h1
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}

        >{language == "en" ? "Watch movies for free!" : "Tonton film gratis!"}</motion.h1>
        <div className='w-full'>
          <p className='text-center text-[#f1f1f1] bg-[#71b] font-bold text-sm my-3 hover:bg-blue-500 hover:text-red-300'>{movies?.message}</p>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1, ease: "anticipate" }}
            className='grid grid-cols-2 gap-4'>
            <div className='bg-indigo-500 p-4'>
              <h1>Hello World 1!</h1>
            </div>
            <div className='bg-indigo-500 p-4'>
              <h1>Hello World 2!</h1>
            </div>
            <div className='bg-indigo-500 p-4'>
              <h1>Hello World 3!</h1>
            </div>
            <div className='bg-indigo-500 p-4'>
              <h1>Hello World 4!</h1>
            </div>

          </motion.div>
        </div>



      </header>
    </Layout>
  )
}

export default Home