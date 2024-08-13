import { useEffect, useState } from 'react'
import './App.css'


function WebTitle(props) {
  const [title, setTitle] = useState(props.title)
  const description = props.description

  function changeTitle() {
    setTitle("Back to WebDev")
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={changeTitle}>Ganti Judul</button>
    </div>
  )
}

function Article(props) {
  const title = props.title
  const description = props.description
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

function App() {
  const [article, setArticle] = useState("")
  const [counterClick, setCounterClick] = useState(1)

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${counterClick}`).then(data => data.json()).then(result => setArticle(result))
  }, [counterClick])

  function nextArticle() {
    setCounterClick(counterClick + 1)
  }

  function prevArticle() {
    setCounterClick(counterClick - 1)
  }
  return (
    <main>
      <header>
        <WebTitle title="Netflix Clone" description="Ini adalah clone website Netflix" />
        <Article title={article.title} description={article.body} />
        <button onClick={prevArticle}>Previous Article</button>
        <button onClick={nextArticle}>Next Article</button>
      </header>
    </main>
  )
}

export default App