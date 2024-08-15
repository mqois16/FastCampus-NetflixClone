import '../App.css'
import useArticle from '../hooks/useArticle.js'
// import Article from '../components/Article.jsx'
import { useAtom } from 'jotai'
import { languageAtom } from '../jotai/atoms.js'
import Layout from '../components/Layout.jsx'


function Home() {
  // const { article } = useArticle()
  const [language,] = useAtom(languageAtom)


  return (
    <Layout>
      <header>
        <h1>{language == "en" ? "Watch movies for free!" : "Tonton film gratis!"}</h1>
      </header>
    </Layout>
  )
}

export default Home