import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = useState("shop");


  return (
    <div className='navbar'> 
    <div className="nav-logo">Logo</div>
    <div>
        <ul  className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu === "shop" ? <hr/> :""}</li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}} to="/women">Women</Link>{menu === "Women" ? <hr/> :""}</li>
            <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:'none'}} to="/men">Men</Link>{menu === "Men" ? <hr/> :""}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}} to="/kids">Kids</Link>{menu === "Kids" ? <hr/> :""}</li>
        </ul>
    </div>
    <div className='nav-login-cart'>
        <Link to='/login'><button className='btn btn-dark'>Login</button></Link>
         <img src=""></img>
    </div>
    </div>
  )
}

export default Navbar
