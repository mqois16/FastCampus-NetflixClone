import { useState } from 'react'
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

  return (
    <main>
      <header>
        <WebTitle title="Netflix Clone" description="Ini adalah clone website Netflix" />
        <Article title="Artikel Pertama" description="Ini adalah deskripsi artikel yang pertama" />
        <Article title="Artikel Kedua" description="Ini adalah deskripsi artikel yang Kedua" />
        <Article title="Artikel Ketiga" description="Ini adalah deskripsi artikel yang ketiga" />
      </header>
    </main>
  )
}

export default App