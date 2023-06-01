import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../contexts/UserProvider";
import { useContext } from "react";

export default function Sidebar() {

    const { user } = useContext(AuthContext)

    return (
        <Navbar sticky="top" className="flex-column Sidebar">
            <Nav.Item>
                <Nav.Link as={NavLink} to='/posts'>Posts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to='/workouts'>Workouts</Nav.Link>
            </Nav.Item>
            {
                user.token 
                ? (
                    <>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to={`/user/${user.username}`}>User Page</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to='/logout'>Logout</Nav.Link> 
                        </Nav.Item>
                    </>
                ) : (
                    <Nav.Item>
                        <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
                    </Nav.Item>
                )
            }
        </Navbar>
    )
}