import { Routes, Route } from 'react-router-dom'
import StartingPage from './pages/StartingPage'
import Join from './pages/Auth/Join'
import Login from './pages/Auth/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  )
}

export default App
