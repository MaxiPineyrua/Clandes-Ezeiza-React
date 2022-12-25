import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'



function App() {
   return (
      <>
         <NavBar/>
         <ItemListContainer saludo={"Hola! Estamos en construcción, disculpe las molestias."}/>
      </>
   )
}

export default App
