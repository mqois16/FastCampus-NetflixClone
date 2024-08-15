import { useState, useEffect } from "react"

useEffect
function useArticle() {
    const [article, setArticle] = useState("")

    function getArticle(counterClick) {
        return fetch(`https://dummyjson.com/posts/${counterClick}`).then(data => data.json())
    }

    useEffect(() => {
        getArticle(1).then(result => setArticle(result))
    }, [])

    return { article }

}

export default useArticle