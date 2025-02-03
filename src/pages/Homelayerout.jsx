import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"


const Homelayerout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer className="" />
    </div>
  )
}

export default Homelayerout
