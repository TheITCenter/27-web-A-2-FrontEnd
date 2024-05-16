import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../Styles/Login.css';
import { useForm } from '../hooks/useForm';

// Definición de los datos del formulario de registro
const registerData = {
  user_name: '',
  password: '',
  name: '',
  email: '',
  birthday: null,
  gender: '',
};

export const Register = () => {
  const authContext = useContext(AuthContext);
  const { register } = authContext || {}
  const { onResetForm, onInputChange, user_name, password, name, email, isFormValid, gender, birthday } = useForm(registerData);

  const handleRegister = async (e) => {
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

    try {
      await register({
        user_name,
        password,
        name,
        email,
        birthday,
        gender
      });
      onResetForm(); // Resetear el formulario después del registro exitoso
    } catch (error) {
      // Manejar errores de registro
      window.alert('Hubo un error al registrar la cuenta. Por favor inténtelo de nuevo más tarde.');
      onResetForm(); 
    }
  };

  const handleHelpClick = () => {
    const contactMessage = "Contáctanos por correo: nombrePagina@devla.com";
    window.alert(contactMessage);
  };

  return (
    <form className="formulario2">
      <h1 className='titulos'>Crear cuenta</h1>
      <div className='fields'>
        <input className="input-fields" 
          type="text" 
          placeholder="Nombre" 
          name="name"
          value={name}
          onChange={onInputChange}
        />
        <input className="input-fields" 
          type="email" 
          placeholder="Correo electrónico" 
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input className="input-fields" 
          type="text" 
          placeholder="Usuario" 
          name="user_name"
          value={user_name}
          onChange={onInputChange}
        />
        <DatePicker
          className="input-fields"
          selected={birthday}
          onChange={(date) => onInputChange({ target: { name: 'birthday', value: date } })}
          placeholderText="Fecha de nacimiento"
          dateFormat="dd/MM/yyyy" // Formato de la fecha (día/mes/año)
        />
         <select className="input-fields" name="gender" value={gender} onChange={onInputChange}>
          <option value="">Selecciona tu género</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="prefiero_no_decirlo">Prefiero no decirlo</option>
        </select>
        <input className="input-fields" 
          type="password" 
          placeholder="Contraseña" 
          name="password"
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
            ¿Ya tienes una cuenta? <Link to="/login" className='text'>Iniciar sesión</Link>
        </div>
      </div>
    </form>
  );
};