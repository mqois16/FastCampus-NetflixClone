import './App.css'

function WebTitle() {
  return (
    <h1>Netflix Clone</h1>
  )
}

function Articles() {
  return (
    <article>
      <h3>Artikel Pertama</h3>
      <p>Ini adalah artikel yang pertama</p>
    </article>
  )
}

function App() {
  return (
    <main>
      <header>
        <WebTitle />
        <Articles />
        <Articles />
        <Articles />
      </header>
    </main>
  )
}

export default App