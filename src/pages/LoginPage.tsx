import { useContext, useEffect, useRef } from 'react'
import Body from '../components/Body'
import { AuthContext } from '../contexts/UserProvider'
import { useNavigate } from 'react-router-dom'

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function LoginPage() {
    
    const usernameField = useRef<HTMLInputElement>(null)
    const passwordField = useRef<HTMLInputElement>(null)
    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    async function handleLoginForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // endpoint on flask-app: /verifyuser
        const res = await fetch(`${base_api_url}/verifyuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameField.current?.value,
                password: passwordField.current?.value
            })
        })
        if (res.ok) {
            const data = await res.json() 
            console.log(data)
            setUser({
                loggedIn: true, 
                username: String(usernameField.current?.value), 
                token: data[0]['user token']
            })
        }
    }

    useEffect(()=>{ 
        if (user.token) navigate('/') 
    },[ user ])

    // useEffect with CB func to check if there is a userToken
    // if true navigate to landing ('/')
    // else do nothing

    return (
        <Body makepost={ false } sidebar={ false } >
            <h2 className="LoginHeader">Login Page</h2>
            <form onSubmit={handleLoginForm}>
                <label>Username:<br />
                    <input type="text" ref={usernameField} />
                </label><br /><br />
                <label>Password:<br />
                    <input type="password" ref={passwordField} />
                </label><br /><br />
                <button>Sign In</button>
            </form>
        </Body>
    )
}