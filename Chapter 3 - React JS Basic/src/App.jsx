import { useEffect, useState } from 'react'
import './App.css'
import { getArticle } from "./utils/getArticle"
import Article from './components/Article'
import LimitArticle from './components/LimitArticle'
import WebTitle from './components/WebTitle'
import Layout from './components/Layout'

function App() {
  const [article, setArticle] = useState("")
  const [counterClick, setCounterClick] = useState(1)

  useEffect(() => {
    getArticle(counterClick).then(result => setArticle(result))
  }, [counterClick])

  function nextArticle() {
    setCounterClick(counterClick + 1)
  }

  function prevArticle() {
    if (counterClick > 1) {
      setCounterClick(counterClick - 1)
    }
  }

  return (
    <Layout>
      <header>
        <WebTitle title="Netflix Clone" description="Ini adalah clone website Netflix" />
        <Article title={article.title} description={article.body} />
        {counterClick == 2 && <p>Clicked 2x</p>}

        {counterClick > 4 && <LimitArticle />}
        <div>
          <button onClick={prevArticle}>Previous Article</button>
          <button onClick={nextArticle}>Next Article</button>
        </div>

      </header>
    </Layout>
  )
}

export default App