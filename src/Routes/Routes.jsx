import{ Routes, Route} from 'react-router-dom'
import {Home, Login,  Contactanos, Register } from '../Pages'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/login" element={<Login />} />,
        <Route path='/register' element={ <Register/> } />,
        <Route path="/contactanos" element={<Contactanos />} />
    </Routes>
  )
}

export default RoutesIndex