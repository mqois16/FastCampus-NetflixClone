import { useEffect, useState } from 'react'
import './App.css'
import useArticle from './hooks/useArticle.js'
import Article from './components/Article'
import LimitArticle from './components/LimitArticle'
import WebTitle from './components/WebTitle'
import Layout from './components/Layout'

function App() {
  const { article } = useArticle()


  return (
    <Layout>
      <header>
        <Article title={article.title} description={article.body} />

      </header>
    </Layout>
  )
}

export default App