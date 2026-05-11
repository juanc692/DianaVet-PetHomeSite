import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from      './components/header'
import SubHeader from   './components/subHeader'
import OurServices from './components/ourServices'
import Comentary from './components/comentary'
import Productos from './components/productos'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    {/* Los componentes SIEMPRE deben empezar con letra mayuscula – Juan */}
    <Header></Header>
    <SubHeader></SubHeader>
    <hr class="my-4"></hr>
    <OurServices></OurServices>
    <hr class="my-4"></hr>
    <Comentary></Comentary>
    <hr class="my-4"></hr>
    <Productos></Productos>
    <hr class="my-4"></hr>
    <Footer></Footer>
    </>
  )
}

export default App
