import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ErrorPage from './pages/error/ErrorPage'
import Landing from './pages/landing/Landing'

import Policy from './pages/privacy-policy/Policy'
import Login from './pages/login/Login'
import About from './pages/about/About'
import HowItWork from './components/howItWork/HowItWork'
import Contact from './components/contact/Contact'
import Functionalities from './components/functionalities/Functionalities'
import PasswordReset from './pages/passwordReset/PasswordReset'
import Dashboard from './pages/dashboard/Dashboard'
import Terms from './pages/terms-conditions/Terms'
import Legales from './pages/legales/Legales'
import Register from './pages/register/Register'
import VerifyEmail from './pages/verifyEmail/VerifyEmail'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Entreprise from './pages/entreprise/Entreprise'
import { useSelector } from "react-redux"

function App() {
  const { token } = useSelector((state) =>
    state.userReducer
  )
  return (
    <Router>
      {!token && <Header />}
      <Routes>
        <Route
          path='/'
          element={!token ? <Landing /> : <Dashboard />}
        />
        <Route
          path='/about'
          element={!token ? <About /> : <Dashboard />}
        />
        <Route
          path='/contact'
          element={!token ? <Contact /> : <Dashboard />}
        />
        <Route
          path='/how-it-works'
          element={!token ? <HowItWork /> : <Dashboard />}
        />
        <Route
          path='/functionalities'
          element={!token ? <Functionalities /> : <Dashboard />}
        />
        <Route
          path='/signup'
          element={!token ? <Register /> : <Dashboard />}
        />
        <Route
          path='/login'
          element={!token ? <Login /> : <Dashboard />}
        />
        <Route
          path='/verify-email'
          element={!token ? <VerifyEmail /> : <Dashboard />}
        />
        <Route
          path='/reset-password'
          element={!token ? <PasswordReset /> : <Dashboard />}
        />
        <Route
          path='/dashboard'
          element={<Dashboard />}
        />
        <Route
          path='/entreprise'
          element={<Entreprise />}
        />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/privacy-policy' element={!token ? <Policy /> : <Dashboard />} />
        <Route path='/legales' element={!token ? <Legales /> : <Dashboard />} />
        <Route path='/terms-and-conditions' element={!token ? <Terms /> : <Dashboard />} />
      </Routes>
      {!token && <Footer />}
    </Router>
  )
}

export default App
