import React, { useState } from 'react';
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

  const [sidebar,SetSidebar] = useState(false);


  const SidebarClick = ()=>{
    SetSidebar(!sidebar)
  }

  return (
    <nav className='Navbar-Body'>
        <ul className='Navbar-list'>
            <div className="logo-title">
                <img className='Logo-img' src="https://www.freeiconspng.com/thumbs/restaurant-icon-png/restaurant-icon-png-plate-1.png" alt="logo"/>
                <li className='sub-link'>FoodCity</li>
            </div>
            
            <div className={sidebar? "list-container": "list-containers"}>
            <li className='sub-link'>Home</li>
            <li className='sub-link'>Menu</li>
            <li className='sub-link'>About Us</li>
            <li className='sub-link'>Service</li>
            </div>


           
            <div className="cart-profile">
              <div className="Menu">
                <MenuIcon onClick={SidebarClick}/>
                </div>
                <ShoppingCartIcon/>
                <img className='pro-img' src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png" alt="prof-logo"/>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar