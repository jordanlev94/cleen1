import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Particles from 'react-particles-js';



function Home() {
  const { t } = useTranslation();
  
  return (
    
    <div className='home'>
     <h3>{t('Thanks.1')}</h3>

  
     
    </div>
  );
}

export default Home;
