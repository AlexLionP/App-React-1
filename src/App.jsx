// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Button from './components/Button/Button.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Astros from './components/Astros/Astros.jsx'
import BottomNav from './components/BottonNav/BottomNav.jsx'
import MyCard from  './components/About/About.jsx'

function App() {
  const btnText = 'Login';  
  const links = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'About', href: '/about'},
    {id: 3, name: 'Astros', href: '/astros'},
    {id: 4, name: 'Categorías', href: '/categorias'},
    {id: 5, name: 'Buscar', href: '/buscar'},
    {id: 6, name: 'Carrito', href: '/carrito'},
  ]
  return (
    <>
      <Navbar links={links} />
      <Button name={btnText} />

      <Routes>
        <Route 
          path = '/'
          element = {<Button name={btnText} />}
        />
        <Route 
          path = '/about'
          element = {<MyCard />}
        />
        <Route 
          path = '/astros'
          element = {<Astros />}
        />
      </Routes>

    </>
  )
}

export default App
// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank"> 
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


