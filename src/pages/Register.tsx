import { useRef, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Body from "../components/Body"
import { AuthContext } from "../contexts/UserProvider"

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function Register() {
    const usernameField = useRef<HTMLInputElement>(null)
    const emailField = useRef<HTMLInputElement>(null)
    const passwordField = useRef<HTMLInputElement>(null)
    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{ 
        if (user.token) {
            localStorage.setItem('token', JSON.stringify(user.token))
            localStorage.setItem('username', JSON.stringify(user.username))
            navigate('/')
        }
        if (user.token || localStorage.getItem('token')) {
            navigate('/')
        }
    },[user])

    async function handleRegisterForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // endpoint on flask-app: /verifyuser
        const res = await fetch(`${base_api_url}/register-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameField.current?.value,
                email: emailField.current?.value,
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
            navigate('/')
        }
    }

    return (
        <Body makepost={ false } sidebar={ false } >
            <h2 className="LoginHeader">Login Page</h2>
            <form onSubmit={handleRegisterForm}>
                <label>Email:<br />
                    <input type="email" ref={emailField} />
                </label><br /><br />
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

