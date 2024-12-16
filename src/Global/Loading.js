import React from 'react'
import { useContext, useEffect, useState } from 'react';
import styles from '../Styles/loading.module.css'
import cookies from 'js-cookie'

const Loading = ({ iLoading, location }) => {
        const currentLanguageCode = cookies.get('i18next') || 'ar'
    
    const [IsLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(false)

    }, [currentLanguageCode]) 


  return (
    <>
          <div className={`${styles.wrapper}`}>
              <div className={`${styles.loader} ${IsLoading ? styles.loader__active :''}`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                      <div
                          key={index}
                          className={`${styles.loader__tile}`}
                          style={{
                              top: `${index * 20}%`,
                              transitionDelay: `${(index - 1) * 0.2}s`,
                          }}
                      />
                  ))}
              </div>
          </div> 
          
    </>
  )
}

export default Loading
