
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/home/main'
import AboutUs from './page/About Us/main'

function App() {


  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
   </Routes>
    </>
  )
}

export default App
