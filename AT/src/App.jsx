
import './App.css'
import Banner from './Componentes/Banner.jsx'
import {Outlet} from 'react-router-dom'


function App() {
  return (
    <>
      <Banner/>
      <Outlet/>
    </>
  )
}

export default App
