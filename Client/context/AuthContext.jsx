import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest } from '../api/auth';
import Cookies from 'js-cookie';
import { verifyToken } from '../api/auth';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

export const UseAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const Signup = async (dataSent) => {
    try {
      const res = await registerRequest(dataSent);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (err) {
      setErrors(err.response.data);
    }
  };

  const Login = async (dataSent) => {
    try {
      const res = await loginRequest(dataSent);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (err) {
      setErrors(err.response.data);
    }
  };

  const Logout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
    setUser(null);
    <Navigate to="/logout" replace />;
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setLoading(false);
        setIsAuthenticated(false);
        setUser(null);
        return;
      }

      try {
        const res = await verifyToken(cookies.token);
        console.log();
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (err) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ Signup, user, isAuthenticated, errors, Login, Logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
