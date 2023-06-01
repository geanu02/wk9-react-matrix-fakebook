import { Link } from 'react-router-dom'

export interface PostItem {
    id: number,
    author: string,
    body: string,
    timestamp: string
}

export default function Post(props: PostItem) {

    return (
        <>
            <Link to={`/user/${props.author}`}><p>{props.author}</p></Link>
            <p>{props.body}</p>
            <p>{props.timestamp}</p>
        </>
    )
}