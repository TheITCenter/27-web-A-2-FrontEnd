import { useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { jwtDecode } from 'jwt-decode'



export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false);
  const [user, setUser] = useState(token ? jwtDecode(token) : null);

  const login = async (formData) => {
    try {
      const { data } = await axios.post('https://two7-web-a-2-backend.onrender.com/login', formData);
      localStorage.setItem('token', data.token);
      if (data?.token) {
        setToken(data.token);
        setUser(jwtDecode(data.token));
        setIsAuthenticated(true);
        navigate('/');
      }
    } catch (error) {
      const message = error.response.data.msg;
      Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }

  const register = async (registerData) => {
    try {
      const { data } = await axios.post('https://two7-web-a-2-backend.onrender.com/register', registerData)
      if (data?.token) {
        Swal.fire({
          title: 'Cuenta creada exitosamente',
          text: 'Inicie sesion',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        navigate('/login')
      }
    } catch (error) {
      const message = error.response.data.msg;
      Swal.fire({
        title: 'Error de registro',
        text: message,
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
    navigate('/login');
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user,
      login,
      logout,
      register
    }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};
