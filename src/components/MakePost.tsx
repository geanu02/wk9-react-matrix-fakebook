import { useContext, useRef } from "react"
import { AuthContext } from "../contexts/UserProvider"
import { useNavigate } from "react-router-dom"

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function MakePost() {

    const { user } = useContext(AuthContext)
    const postField = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    async function handlePostForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const res = await fetch(`${base_api_url}/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                body: postField.current?.value
            })
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data)
            navigate(`/user/${user.username}`)
        }
    }

    return (

        <form onSubmit={handlePostForm} className="postForm">
            <input type="text" ref={postField} placeholder="What's on your mind?" />
            <button>Post</button>
        </form>

    )
}
