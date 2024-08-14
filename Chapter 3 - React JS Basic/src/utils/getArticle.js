export function getArticle(counterClick) {
    return fetch(`https://dummyjson.com/posts/${counterClick}`).then(data => data.json())
}