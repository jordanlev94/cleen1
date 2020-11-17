import React from 'react';
import './Header.css';
import Navbar2 from '../Navbar/Navbar2';
import Sidebar from '../Navbar/Sidebar';
import { Link } from 'react-router-dom';




const header = () => {
    return (
        <div className='tHeader '>
            
            <div className='Sidebar ' >
                            <Sidebar/>
            </div>
            
            <div className='logo '>
<Link to='/'> <img className='Logo' src='../../images/Logo1.png' height='60px'/></Link>
            </div>
            <div className='Navbar '>
                            <Navbar2/>
            </div>
        </div>
    )
}

export default header
