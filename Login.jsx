import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import '../Styles/Login.css';

const loginData = {
  username: '',
  password: ''
};

export const Login = () => {
  const authContext = useContext(AuthContext);
  const { login } = authContext || {}; // Manejo de acceso a las propiedades de manera segura

  const { onResetForm, onInputChange, username, password, isFormValid, formState } = useForm(loginData);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de la contraseña
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#\-_])[A-Za-z\d@$!%*?&#\-_]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('La contraseña es incorrecta');
      return;
    }

    // Validación de usuario y contraseña
    if (formState.username === 'usuario' && formState.password === 'contraseña') {
      login(formState);
      navigate('/');
    } else {
      setError('Usuario o contraseña incorrectos');
      onResetForm(); 
    }
  };

  const handleHelpClick = () => {
    const contactMessage = "Contáctanos por correo: nombrePagina@devla.com";
    window.alert(contactMessage);
  };

  return (
    <div className='contenedor'>
      <form className='formulario' onSubmit={handleSubmit}>
        <h1 className='titulos'>Iniciar sesión</h1>
        <div className='extra-fields'>
          <button className='google'>
            Continuar con Google
          </button>
          <button className='facebook'>
            Continuar con Facebook
          </button>
          <button className='apple'>
            Continuar con Apple
          </button>
        </div>
        <div className='fields'>
          <input
            className='input-fields'
            type="text"
            placeholder="Usuario"
            name="username"
            value={username}
            onChange={onInputChange}
          />
          <input
            className='input-fields'
            type="password"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
          />
          <button
            onClick={handleSubmit}
            className='boton'
            type="submit"
            disabled={!isFormValid}
          >
            Iniciar sesión
          </button>
          {error && <small className='error-message'>{error}</small>}
        </div>
        <div className='infoExtra'>
          <div className='help' onClick={handleHelpClick}>Ayuda</div>
          <div className='register'>
            ¿Eres nuevo en NombrePagina? <Link to="/register" className='text'>Crear cuenta</Link>
          </div>
        </div>
      </form>
      <div className='contenedor2'>
        <h1 className='titulo2'>¡Hola! ¡Qué gustó verte!</h1>
      </div>
    </div>
  );
};
