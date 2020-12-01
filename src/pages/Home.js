import React, {useState, useEffect, useContext} from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Particles from 'react-particles-js';
import {Context} from '../ContextProvider'



function Home() {
  const { t } = useTranslation();
  const context = useContext(Context)


  return (
    
    <div className='home'>
     <h3>{t('Thanks.1')}</h3>
     <h3>{context.uid}</h3>

  
     
    </div>
  );
}

export default Home;
