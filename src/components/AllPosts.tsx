import PostsPage from '../pages/PostsPage'

export default function AllPosts() {

    return (
        <PostsPage endpoint={`/posts`} heading={`Posts`} />
    )
}