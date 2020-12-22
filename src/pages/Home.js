import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Particles from 'react-particles-js';
import {Context} from '../components/ContextProvider'



function Home() {
  const { t } = useTranslation();
  const context = useContext(Context)

  return (

    <div className='home'>
         <p>Thanks</p>
         <p>{context.uid}</p>

    </div>
  );
}

export default Home;
