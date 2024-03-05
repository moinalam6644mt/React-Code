import { Link } from 'react-router-dom'
import '../style/home.css'
const MenuBar = () => {
  return (

    <nav className="navbar d-flex justify-content-end bg-info fixed-top">
      <div className="header p-2 ">
        <Link to="/" style={{ listStyleType: "none" }}>Home</Link>
      </div>
      <div className="p-2">
        <Link to="/products">Clients</Link>
      </div>
      <div className="p-2">
        <Link to="/dashboard">Services</Link>
      </div>
      <div className="p-2">
        <Link to="/dashboard">About Us</Link>
      </div>
      <div className="p-2">
        <Link to="/Contatcform">Contact</Link>
      </div>
    </nav>
  )
}
export default MenuBar