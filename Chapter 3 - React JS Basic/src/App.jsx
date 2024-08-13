import './App.css'

function WebTitle(props) {
  const title = props.title
  return (
    <h1>{title}</h1>
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
        <WebTitle title="Netflix Clone" />
        <Article title="Artikel Pertama" description="Ini adalah deskripsi artikel yang pertama" />
        <Article title="Artikel Kedua" description="Ini adalah deskripsi artikel yang Kedua" />
        <Article title="Artikel Ketiga" description="Ini adalah deskripsi artikel yang ketiga" />

      </header>
    </main>
  )
}

export default App