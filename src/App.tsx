import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
// import { useState } from 'react'

import NavBar from './shared/navbar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/jazz-jackrabbit-2-remake" />} />
        <Route path="/jazz-jackrabbit-2-remake" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
