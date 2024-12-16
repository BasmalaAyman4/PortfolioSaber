import React, { useState, useEffect } from 'react'
import styles from '../Styles/Nav.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie'
import i18next from 'i18next';
import logo from '../assets/images/saber.png'
const Nav = (props) => {

    const languages = [
        {
            code: 'en',
            name: 'English',
            dir: 'rtl',
            country_code: 'gb',
        },
        {
            code: 'ar',
            name: 'Arabic',
            dir: 'ltr',
            country_code: 'sa',
        },
    ]
    const currentLanguageCode = cookies.get('i18next') || 'ar'
const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
const { t } = useTranslation()
function handleLanguage(code, index, event) {
  window.location.reload();
  event.preventDefault();
  i18next.changeLanguage(code)
}
    return (
        <>
            <div className={`${styles.navbar} `} dir={currentLanguageCode=='ar'?'rtl':'ltr'}>
               
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
                    {languages.map(({ code, name }, index) => (
                                <>
                                    {currentLanguageCode === 'ar' && code === 'ar' ?
                                        <Link
                                            id={`language${index}`}
                                            key={name}
                                            onClick={(event) => { handleLanguage(code, index, event) }}
                                            className={`px-3 pt-2  d-none`}
                                            href="#">{name}
                                        </Link>
                                        :
                                        currentLanguageCode === 'en' && code === 'en' ?
                                            <Link
                                                id={`language${index}`}
                                                key={name}
                                                onClick={(event) => { handleLanguage(code, index, event) }}
                                                className={`px-3 pt-2  d-none`}
                                                href="#">{name}
                                            </Link>
                                            :
                                            <p
                                                id={`language${index}`}
                                                key={name}
                                                onClick={(event) => { handleLanguage(code, index, event) }}
                                                className={`px-3 pt-2 ${styles.lang__para} `}
                                                href="#">{name}
                                            </p>

                                    }
                                </>
                            ))}

                        
                    </div> 
              

            </div>
        </>
    )
}

export default Nav
