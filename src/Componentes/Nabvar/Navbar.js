import { useContext } from "react"
import { datacontext } from "../Context/Datacontext"

import { Link } from 'react-router-dom';

import TotalItems from '../Contencar/TotalItems';

import "./Navbar.css";

const Navbar = () => {
  const{carrito} =useContext(datacontext);
  return (
    <div className='Nav-container'>
        <nav className = 'navbar'>
          <Link to={"/"}>
            <h1 className='logo'>Tienda</h1>
            </Link>
            <Link className='vercarrito' to={'/car'}>
              🛒
              {carrito.length > 0 ?<TotalItems/>: null}
              
            </Link>
        </nav>
    </div>
  )
}

export default Navbar;