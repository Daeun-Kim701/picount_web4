import { Routes, Route } from 'react-router-dom';
import StartingPage from './pages/StartingPage';
import Join from './pages/Auth/Join';
import Login from './pages/Auth/Login';
import Welcome from './pages/Auth/Welcome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartingPage />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
