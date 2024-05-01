import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './Routes/Routes'
import Header from './Components/Header'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
      
    </>
  )
}

export default App
