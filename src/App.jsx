import { Router } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Routers from "./Routes"

function App () {
  return (
   <div className="flex">
    <Navbar/>
    <Routers/>
   </div>
  )
}

export default App
