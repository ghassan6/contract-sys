
import './App.css'
import NavBar from './components/landing/NavBar'
import { AuthProvider } from './components/auth/auth'
import { Route, Routes } from 'react-router'
import { useAuth } from './components/auth/auth'

// import components
import Home from './components/landing/Home'
import Login from './components/auth/Login'
import Container from './components/auth/Container'
import Register from './components/auth/Register'
import UserContracts from './components/user/UserContracts'
import Profile from './components/user/Profile'
import RequireAuth from './components/auth/RequireAuth'
import Contact from './components/landing/Contact'
import AboutUs from './components/landing/AboutUs'
import Footer from './components/landing/Footer'
import ContractsList from './components/landing/ContractsList'
import Dashboard from './components/user/Dashboard'

function App() {

  return (
    <>
    <AuthProvider>
      <NavBar />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login"
        element={
          <Container>
          <Login />
          </Container>
        }
        />

      <Route path="/register"
        element={
          <Container>
          <Register />
          </Container>
        }
        />

      <Route path="/mycontracts/:id" element={
        <RequireAuth>
          <UserContracts userId={useAuth()?.user?.id} />
        </RequireAuth>
        
        }/>

      <Route path='/profile' element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } />
      <Route path='/about' element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="contracts" element={<ContractsList/>} />

      <Route path='/dashboard' element={
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      } />
      </Routes>
      <Footer/>
    </AuthProvider>
    </>
    )
}

export default App
