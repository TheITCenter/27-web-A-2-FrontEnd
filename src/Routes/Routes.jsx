import{ Routes, Route} from 'react-router-dom'
import {Home, Login,  Contactanos, Register, Car } from '../Pages'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/login" element={<Login />} />,
        <Route path='/register' element={ <Register/> } />,
        <Route path="/contactanos" element={<Contactanos />} />,
        <Route path="/carrito" element={<Car />} />
    </Routes>
  )
}

export default RoutesIndex