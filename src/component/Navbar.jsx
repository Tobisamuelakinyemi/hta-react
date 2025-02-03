import { NavLink } from "react-router-dom"
import '../assets/style/Navbar.css'


const Navbar = () => {
  return (
    <div className={Navbar}>
      <NavLink to='/'> Home</NavLink>
      <NavLink to='Aboutt'> About</NavLink>
      <NavLink to='Contactt'> Contact</NavLink>
      <NavLink to='Experience'> Experience</NavLink>
      <NavLink to='Resume'> Resume</NavLink>
      

    </div>
  )
}

export default Navbar
