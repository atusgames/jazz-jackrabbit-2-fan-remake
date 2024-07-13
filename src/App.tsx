import { HashRouter, Route, Routes, Navigate } from "react-router-dom"

import JazzJackrabbit from "./components/JazzJackrabbit"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/jazz-jackrabbit-2-remake" />} />
        <Route path="/jazz-jackrabbit-2-remake" element={<JazzJackrabbit />} />
      </Routes>
    </HashRouter>
  )
}

export default App
