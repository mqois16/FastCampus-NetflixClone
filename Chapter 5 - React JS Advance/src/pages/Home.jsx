import '../App.css'
import { useAtom } from 'jotai'
import { languageAtom } from '../jotai/atoms.js'
import Layout from '../components/Layout.jsx'
import { useEffect, useState } from 'react'
import { apiInstance } from '../utils/apiInstance.js'


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
        <h1>{language == "en" ? "Watch movies for free!" : "Tonton film gratis!"}</h1>
        <div className='w-full'>
          <p className='text-center text-[#f1f1f1] bg-[#71b] font-bold text-sm my-3 hover:bg-blue-500 hover:text-red-300'>{movies?.message}</p>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-indigo-500 p-4'>
              <h1>Hello World!</h1>
            </div>
            <div className='bg-indigo-500 p-4'>
              <h1>Hello World!</h1>
            </div>
            <div className='bg-indigo-500 p-4'>
              <h1>Hello World!</h1>
            </div>
            <div className='bg-indigo-500 p-4'>
              <h1>Hello World!</h1>
            </div>

          </div>
        </div>



      </header>
    </Layout>
  )
}

export default Home