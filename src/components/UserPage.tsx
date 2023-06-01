import { useParams } from 'react-router-dom'
import PostsPage from '../pages/PostsPage'

export default function UserPage() {

    const { username } = useParams()

    return (
        <PostsPage endpoint={`/posts/${username}`} heading={`${username}'s Page`} />
    )
}