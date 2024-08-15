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
        <p className='bg-black text-white p-4 text-center'>{movies?.message}</p>

      </header>
    </Layout>
  )
}

export default Home