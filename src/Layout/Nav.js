import React, { useState, useEffect } from 'react'
import styles from '../Styles/Nav.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie'
import i18next from 'i18next';
import logo from '../assets/images/logo.svg'
const Nav = (props) => {

return (
        <>
            <div className={`${styles.navbar} `} >
               
                  <div>
<img alt='' src={logo} className={`${styles.logo}`}/>
                  </div>
                  <div >
 {/*                    <ul className={`${styles.nav__ul}`} dir={currentLanguageCode == 'ar' ? 'ltr' : 'rtl'}>
                        <li className={`${styles.nav__item}`}><a href='/' className={`${styles.nav__link}`}>Home</a></li>
                        <li className={`${styles.nav__item}`}><a href='/' className={`${styles.nav__link}`}>Service</a></li>
                        <li className={`${styles.nav__item}`}><a href='/' className={`${styles.nav__link}`}>Blog</a></li>
                        <li className={`${styles.nav__item}`}><a href='/' className={`${styles.nav__link}`}>Projects</a></li>
                        <li className={`${styles.nav__item}`}><a href='/' className={`${styles.nav__link}`}>Contact</a></li>

</ul> */}
                  </div>
                     <div className={`${styles.items}`}>
               
                        
                    </div> 
              

            </div>
        </>
    )
}

export default Nav
