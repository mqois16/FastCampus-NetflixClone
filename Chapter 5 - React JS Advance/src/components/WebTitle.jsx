import { useState } from 'react'

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

export default WebTitle