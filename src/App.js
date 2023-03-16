import './App.css';
import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<LandingPage />} path='/' />
        <Route element={<ProfilePage />} path='/profile/:id' />
        <Route element={<ProfilePage />} path='/post/:id' />
        <Route element={<ProfilePage />} path='/gallery/:id' />
        <Route element={<ProfilePage />} path='/todo/:id' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
