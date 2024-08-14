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

export default Article