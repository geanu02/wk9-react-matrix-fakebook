import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header"
import Workout from "./pages/Workout"
import Container from "react-bootstrap/Container"
import LoginPage from "./pages/LoginPage"
import UserPage from "./components/UserPage"
import AllPosts from "./components/AllPosts"
import Logout from "./components/Logout"

function App() {

  return (
    <Container className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <AllPosts /> } />
          <Route path='/posts' element={ <AllPosts /> } />
          <Route path='/workouts' element={ <Workout /> } />
          <Route path='/login' element={ <LoginPage />} />
          <Route path='/logout' element={ <Logout />} />
          <Route path='/user/:username' element={ <UserPage /> } />
          <Route path='*' element={ <Navigate to='/' /> } />

        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App