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
import Aos from 'aos'
const FirstSec = () => {
    const currentLanguageCode = cookies.get('i18next') || 'ar'
  const [isVisible, setVisible] = useState(false);
  const [isMobVisible, setMobVisible] = useState(false);
  const [isFlibVisible, setFlibVisible] = useState(false);
  const [isActiveVisible, setActiveVisible] = useState(false)
  useEffect(() => {
    Aos.init();
    setTimeout(() => {
      setVisible(true);
    }, 500);
    setTimeout(() => {
      setMobVisible(true);
    }, 1000);
    setTimeout(() => {
      setFlibVisible(true);
    }, 2500);
    setTimeout(() => {
      setActiveVisible(true);
    }, 2000);
  }, [])

  return (
    <>
      <section  className={`${styles.first__sec}`}>
        <Row className={`${styles.first__sec__row}`}>

  <Col>
            <div className={`${styles.title__body}`} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1300">

 
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
              {isMobVisible &&
              <img alt='' src={user} className={`${styles.user}`} data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1300" />
              }
              {isActiveVisible &&
              <>
                <img alt='' src={gmail} className={`${styles.gmail}`} data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" />
              <img alt='' src={call} className={`${styles.call}`} data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" />
              <img alt='' src={linkedin} className={`${styles.linkedin}`} data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" />
                <img alt='' src={git} className={`${styles.git}`} data-aos="flip-up" />
                <img alt='' src={benhance} className={`${styles.benhance}`} data-aos="flip-up" />
              <img alt='' src={youtube} className={`${styles.youtube}`} data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" />
              </>
              }
              </div>
  </Col>
         
</Row>
</section>
    </>
  )
}

export default FirstSec