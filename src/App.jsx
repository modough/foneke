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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/how-it-works'
          element={<HowItWork />}
        />
        <Route
          path='/functionalities'
          element={<Functionalities />}
        />
        <Route
          path='/signup'
          element={<Register />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/verify-email'
          element={<VerifyEmail />}
        />
        <Route
          path='/reset-password'
          element={<PasswordReset />}
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
        <Route path='/privacy-policy' element={<Policy />} />
        <Route path='/legales' element={<Legales />} />
        <Route path='/terms-and-conditions' element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
