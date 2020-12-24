import React from 'react';
import { useLocation, useHistory } from 'react-router-dom'

import { VisaLogo } from '$COMPONENTS/icons/index';
import styles from './styles.css'

const Header = () => { 
  const { pathname } = useLocation()
  const { goBack } = useHistory()
  const isSetPinStep = pathname === '/enrollment/setPin'

  return ( 
    <div className={`col-12 t-center ${styles.header}`}>
      {isSetPinStep && <div onClick={goBack} className={styles.back} />}
      <img className={`${styles.visaLogo}`} src={VisaLogo} />
    </div>
  )
}

export default Header
