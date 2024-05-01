import{ Routes, Route} from 'react-router-dom'
import {Home, Login,  Contactanos } from '../Pages'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/login" element={<Login />} />,
        <Route path="/contactanos" element={<Contactanos />} />
    </Routes>
  )
}

export default RoutesIndex