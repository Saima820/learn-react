
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/home/main'
import AboutUs from './page/About Us/main'
import Signin from './page/Signin/main'

function App() {


  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
    <Route path='/signin' element={<Signin/>}/>
   </Routes>
    </>
  )
}

export default App
