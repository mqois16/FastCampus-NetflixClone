import Navbar from "./navbar"

function Layout({ children }) {
    return (
        <main className="layout">
            <Navbar />
            {children}
        </main>
    )

}

export default Layout