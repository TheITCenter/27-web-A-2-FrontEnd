import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './Routes/Routes'
import Header from './Components/Header'
import Searcher from './Components/Searcher'



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
        <Searcher />
      </BrowserRouter>
      
    </>
  )
}

export default App
