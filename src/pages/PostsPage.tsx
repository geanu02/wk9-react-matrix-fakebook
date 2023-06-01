import { useState, useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner'
import Body from "../components/Body";
import Post, { PostItem } from "../components/Post";

const base_api_url = import.meta.env.VITE_APP_BASE_API

interface Poststable {
    endpoint: string
    heading: string
}

export default function PostsPage({endpoint, heading}: Poststable) {
    const [ postsArray, setPostsArray ] = useState<PostItem[]>([]) 

    useEffect(() => {
        (async () => {
            const res = await fetch(`${base_api_url}${endpoint}`)
            if (res.ok) {
                const data = await res.json()
                setPostsArray(data)
            }
        })()
    }, [])

    return (
        <Body makepost sidebar>
            { postsArray.length === 0 ? 
                ( <Spinner animation='border'/> ) :
                ( <>
                <h3>{ heading }</h3>
                {postsArray.map(postItem => {
                    return <Post
                        key={postItem.id}
                        id={postItem.id}
                        body={postItem.body}
                        author={postItem.author}
                        timestamp={postItem.timestamp.toLocaleString()} />
                })}</>)
            }
        </Body>
    )
}