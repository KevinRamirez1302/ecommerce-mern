import { Navbar } from './Views/Navbar/Navbar';
import { MainPage } from './Views/main page/main.page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './Views/register/register';
import { Login } from './Views/login/login';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
