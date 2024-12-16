import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../Styles/Home.module.css'
import cookies from 'js-cookie'
import line from '../../assets/images/line.png'
import user from '../../assets/images/user.jpg'
import back from '../../assets/images/back.png'
import gmail from '../../assets/images/gmail.png'
import call from '../../assets/images/mobile.png'
import linkedin from '../../assets/images/linkedin (1).png'
import git from '../../assets/images/github.png'
import youtube from '../../assets/images/youtube.png'
import benhance from '../../assets/images/behance (1).png'
const FirstSec = () => {
    const currentLanguageCode = cookies.get('i18next') || 'ar'


  return (
    <>
      <section dir={currentLanguageCode == 'ar' ? 'ltr' : 'rtl'} className={`${styles.first__sec}`}>
        <Row className={`${styles.first__sec__row}`}>

  <Col>
            <div className={`${styles.title__body}`}>

 
                <h1 className={`${styles.title}`}>Hello! I’m Mohamed Saber</h1>
            <h1 className={`${styles.title__color}`}>Flutter Developer
                  <img alt='' src={line} className={`${styles.title__line}`} />
            </h1>
              <p className={`${styles.para__line}`}>Experienced Flutter Developer with a strong foundation in state management, clean architecture, CI/CD, Skilled at
                creating high-performance, user focused mobile applications that boost user experience and engagement. Eager to
                contribute to app deployment, optimization, and cross-functional collaboration at a forward thinking tech company.</p>
            </div>
  </Col>
  <Col>
  <div className={`${styles.user__body}`}>
                      <img alt='' src={back} className={`${styles.back}`} />
                <img alt='' src={user} className={`${styles.user}`} />
              <img alt='' src={gmail} className={`${styles.gmail}`} />
              <img alt='' src={call} className={`${styles.call}`} />
              <img alt='' src={linkedin} className={`${styles.linkedin}`} />
              <img alt='' src={git} className={`${styles.git}`} />
              <img alt='' src={benhance} className={`${styles.benhance}`} />
              <img alt='' src={youtube} className={`${styles.youtube}`} />
  </div>
  </Col>
         
</Row>
</section>
    </>
  )
}

export default FirstSec