import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import BackendAPI from './api/server'
import LogInPage from './pages/LogInPage'
import CreateAccountPage from './pages/CreateAccountPage'
import HomePage from './pages/HomePage'
import BlogHomePage from './pages/BlogHomePage'
import AboutPage from './pages/AboutPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import UserDashBoardPage from './pages/UserDashBoardPage'
import NewAccountRedirectToLogin from './pages/NewAccountRedirectToLogin'
import AlgoSign from './pages/algosigner'

export default function App() {
  const backend = new BackendAPI()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LogInPage backend={backend} />} />
        <Route path='create-account' element={<CreateAccountPage backend={backend} />} />
        <Route path='new-account-redirect-to-login' element={<NewAccountRedirectToLogin />} />
        <Route path='dashboard' element={<UserDashBoardPage backend={backend}/>} />
        <Route path='blog' element={<BlogHomePage />} />

        <Route path='about' element={<AboutPage />} />  {/**only needs CMS*/}
        <Route path='privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='terms-of-service' element={<TermsOfServicePage />} />
        <Route path='algosigner' element={<AlgoSign />} />
      </Routes>
    </BrowserRouter>
  )
}
