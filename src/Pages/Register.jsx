import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Login.css'
import { useForm } from '../hooks/useForm';

const registerData = {
  username: '',
  password: '',
  name: '',
  email: '',
  lastname: ''
}

export const Register = () => {
  const { onResetForm, onInputChange, username, password, name, email, lastname, isFormValid } = useForm(registerData)
  const navigate = useNavigate();

  const handleRegister =(e) => {
    e.preventDefault();

        // Validación del correo electrónico
    if (!email.includes('@') || !email.includes('.')) {
      window.alert('El correo electrónico debe ser válido.');
      return;
    }

    // Validación de la contraseña
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#\-_])[A-Za-z\d@$!%*?&#\-_]{8,}$/;
    if (!passwordRegex.test(password)) {
      window.alert('La contraseña debe contener al menos una mayúscula, una minúscula, un carácter especial, un número y ser de al menos 8 caracteres.');
      return;
    }

    // Resto de la lógica de registro
    onResetForm();
    navigate('/login');
  }
  const handleHelpClick = () => {
    const contactMessage = "Contáctanos por correo: nombrePagina@devla.com";
    window.alert(contactMessage);
  }
  return (
    <form className="formulario2">
      <h1 className='titulos'>Crear cuenta</h1>
      <div className='fields'>

        <input className="input-fields" 
          type="text" 
          placeholder="Nombre" 
          name= "name"
          value={name}
          onChange={onInputChange}
        />
        <input className="input-fields" 
          type="text" 
          placeholder="Apellido" 
          name= "lastname"
          value={lastname}
          onChange={onInputChange}
        />
        <input className="input-fields" 
          type="email" 
          placeholder="Correo electrónico" 
          name= "email"
          value={email}
          onChange={onInputChange}
        />

        <input className="input-fields" 
          type="text" 
          placeholder="Usuario" 
          name= "username"
          value={username}
          onChange={onInputChange}
        />
        <input className="input-fields" 
          type="password" 
          placeholder="Contraseña" 
          name= "password"
          value={password}
          onChange={onInputChange}
        />
        <button 
          onClick={handleRegister} 
          className='boton' 
          type="submit"
          disabled={!isFormValid}
        >
          Crear cuenta
        </button>
      </div>
      
      <div className='infoExtra'>
        <div className='help' onClick={handleHelpClick}>Ayuda</div>     
        <div className='register'>
            ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
        </div>
      </div>
    </form>
  )
}
