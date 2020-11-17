import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import logo from '../icons/world-grid.svg'
import './Navi18.css'

const Navi18 = () => { 


    const { t } = useTranslation();

    function handleClick(lang) {
      i18next.changeLanguage(lang)
    }
    

    return (
        <div>
            <div className="App18">
        <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
        <header className="App-header">
          
          
        </header>
          <button onClick={()=>handleClick('fr')} >
            FRANCAIS TONTON
          </button>
          <button onClick={()=>handleClick('ko')} >
            Korean
          </button>
          <button onClick={()=>handleClick('chi')} >
            Chinese
         </button>
         <button onClick={()=>handleClick('eng')} >
            eng
         </button>
         <button onClick={()=>handleClick('isr')} >
           ISR
         </button>
        </nav>
        
    </div>
        </div>
    )
}

export default Navi18
