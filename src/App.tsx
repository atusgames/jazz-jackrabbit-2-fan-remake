import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
// import { useState } from 'react'

import JazzJackrabbit from "./components/JazzJackrabbit"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/jazz-jackrabbit-2-remake" />} />
        <Route path="/jazz-jackrabbit-2-remake" element={<JazzJackrabbit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
