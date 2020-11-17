import '../Navbar/Navbar2.css';
import { ReactComponent as NotifIcon } from '../icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../icons/messenger.svg';
import { ReactComponent as FlecheIcon } from '../icons/caret.svg';
import { ReactComponent as PanierIcon} from '../icons/panier.svg';
import { ReactComponent as WorldIcon} from '../icons/world-grid.svg';
// import { ReactComponent as CogIcon } from '../icons/cog.svg';
// import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
// import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
// import { ReactComponent as BoltIcon } from '../icons/bolt.svg';
// import { ReactComponent as ProfilIcon } from '../icons/user.svg';
import React, { useState} from 'react';
import DropdownMenu from './DropdownMenu'
import './DropdownMenu.css'



function Navbar3(props) {
    return(
      <nav className='navbar'> 
      <ul className='navbar-nav'> {props.children}</ul>
      </nav>
    )
  }
  
  function NavItem(props) {
    const [open, setOpen] = useState(false);
    return(
      <li className='nav-item'>
        <div className='icon-button' onClick={() => setOpen(!open)}> 
  {props.icon}
        </div>
        {open && props.children}
      </li>
    )
  }

function Navbar2() {
    return(
<Navbar3>
    
   <div className='rightt'>
     
    <NavItem icon={<PanierIcon/>}/>
       
       <NavItem icon={<MessengerIcon/>}/>

       <NavItem icon={<FlecheIcon/>}>


       <DropdownMenu/>
       </NavItem>
       
    
       </div>
       
     </Navbar3>
    )
}


export default Navbar2