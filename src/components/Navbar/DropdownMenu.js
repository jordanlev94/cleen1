import React, { useState } from 'react';
import './DropdownMenu.css'
import { CSSTransition } from 'react-transition-group';
// import { ReactComponent as NotifIcon } from '../icons/bell.svg';
// import { ReactComponent as MessengerIcon } from '../icons/messenger.svg';
// import { ReactComponent as FlecheIcon } from '../icons/caret.svg';
// import { ReactComponent as PanierIcon} from '../icons/panier.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../icons/bolt.svg';
import { ReactComponent as ProfilIcon } from '../icons/user.svg';


function DropdownMenu(){

    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null);
  
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
    function DropdownItem(props) {
      return(
        <div className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className='icon-button'>{props.leftIcon}</span>
          {props.children}
          <span className='icon-right'>{props.rightIcon}</span>
        </div>
      )
      
    }
    return(
      <div className="dropdown" style={{height: menuHeight}}>
  
    <CSSTransition in={activeMenu === 'main'} 
    unmountOnExit
    timeout={500} classNames='menu-primary'>
  
          <div className='menu'>
  <DropdownItem leftIcon={<ProfilIcon/>}> MY PROFIL</DropdownItem>
  <DropdownItem 
  leftIcon={<CogIcon/>}
  rightIcon={<ChevronIcon/>}
  goToMenu="settings"
  onEnter={calcHeight}
  >
    Settings
  </DropdownItem>
  </div>
  </CSSTransition>
  <CSSTransition in={activeMenu === 'settings'} 
  unmountOnExit 
  timeout={500} 
  classNames='menu-secondary'>
  
  <div className='menu'>
  <DropdownItem leftIcon={<ArrowIcon/>} goToMenu='main'/>
  
  <DropdownItem leftIcon={<BoltIcon/>}> SETTINGS </DropdownItem>
  <DropdownItem leftIcon={<BoltIcon/>}> ELIE </DropdownItem>
  <DropdownItem leftIcon={<BoltIcon/>}> JIM </DropdownItem>
  <DropdownItem leftIcon={<BoltIcon/>}> SETTINGS </DropdownItem>
  <DropdownItem leftIcon={<BoltIcon/>}> SETTINGS </DropdownItem>
  <DropdownItem leftIcon={<BoltIcon/>}> SETTINGS </DropdownItem>
   
  </div>
  </CSSTransition>
  
      </div>
    )
}

export default DropdownMenu