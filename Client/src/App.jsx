import { Navbar } from './Views/Navbar/Navbar'
import { MainPage } from './Views/main page/main.page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register } from './Views/register/register'
import { Login } from './Views/login/login'
import { AllProducts } from './Views/AllProducts/allProducts'
import { ProductPreview } from './Views/preview/preview'
import { AboutSection } from './Views/aboutSection/about.jsx'
import { Notfound } from './Views/404notfound/404notfound.jsx'
import { Aprobado } from './Views/aprobado/aprobado.jsx'
import './app.css'
import { AuthProvider } from '../context/AuthContext.jsx'
import { ProtectedRoute } from './ProtectedRoute.jsx'
import { Profile } from './PrivateViews/profile.jsx'
import { CarSection } from '../src/PrivateViews/shoppingCar.jsx'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductPreview />} />
          <Route path="/about" element={<AboutSection />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/aprobado" element={<Aprobado />} />
            <Route path="/ShoppingCar" element={<CarSection />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
