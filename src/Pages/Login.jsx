// import { AuthContext } from '../context/AuthContext';
import {  useState } from 'react';
// useContext,
import {  Link, useNavigate} from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import '../Styles/Login.css'

const loginData = {
  username: '',
  password: ''
}

export const Login = () => {
  // const { login } = useContext(AuthContext);
  const { onInputChange, username, password, isFormValid } = useForm(loginData);
  // , formState
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

  // //   // Validación de usuario y contraseña
  // //   // if (formState.username === 'usuario' && formState.password === 'contraseña') {
  // //   //   login(formState);
  // //   //   navigate('/user');
  // //   // } else {
  // //   //   setError('Usuario o contraseña incorrectos');
  // //   // }
    // login(formState);
    navigate('/');
  }

  const handleHelpClick = () => {
    const contactMessage = "Contáctanos por correo: nombrePagina@devla.com";
    window.alert(contactMessage);
  }

  return (
    <form className='formulario' onSubmit={handleSubmit} >
      <h1 className='titulos' >Iniciar sesión</h1>
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
      <div className='infoExtra' >
        <div className='help'onClick={handleHelpClick} >Ayuda</div>      
        <div className='register'>
          ¿Eres nuevo en NombrePagina? <Link to="/register">Crear cuenta</Link> 
        </div> 
      </div> 
     </form>
  )
}


