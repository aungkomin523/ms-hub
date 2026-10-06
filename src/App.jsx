import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectTimelinePage from './pages/ProjectTimelinePage'
import React, { useState, useEffect, useRef } from 'react'
import PricingPage from './pages/PricingPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ForgotPasswordPage from './pages/ForgetPassword'
import DashboardPage from './pages/DashboardPage'

function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {

    document.documentElement.setAttribute(
      'data-bs-theme',
      theme
    )

    localStorage.setItem('theme', theme)

  }, [theme])


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout theme={theme} setTheme={setTheme} />}>
          <Route index element={<HomePage />} />
          <Route path='sign-up' element={<RegisterPage />} />
          <Route path='sign-in' element={<LoginPage />} />
          <Route path='forgot-password' element={<ForgotPasswordPage />} />
          <Route path='dashboard' element={<DashboardPage />} />
          {/* <Route path='pricing' element={<PricingPage />} /> */}
          <Route path="/project/:projectId" element={<ProjectTimelinePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App