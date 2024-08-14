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

  function prevArticle(props) {
    console.log(props)
    if (counterClick > 1) {
      setCounterClick(counterClick - 1)
    }
  }

  return (
    <Layout>
      <header>
        <Article title={article.title} description={article.body} />

      </header>
    </Layout>
  )
}

export default App