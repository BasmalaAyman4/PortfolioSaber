import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../Styles/Home.module.css'
import cookies from 'js-cookie'
import line from '../../assets/images/line.png'
import user from '../../assets/images/photo_5780547031889201456_y.jpg'
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
  const [isMobVisible, setMobVisible] = useState(false);
  const [isActiveVisible, setActiveVisible] = useState(false)
  useEffect(() => {
    Aos.init();
   
    setTimeout(() => {
      setMobVisible(true);
    }, 800);
    setTimeout(() => {
      setActiveVisible(true);
    }, 1000);
  }, [])

  return (
    <>
      <section  className={`${styles.first__sec}`}>
        <Row className={`${styles.first__sec__row}`}>

  <Col>
            <div className={`${styles.title__body}`} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="500">

 
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
              <img alt='' src={user} className={`${styles.user}`} data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="500" />
              }
              {isActiveVisible &&
              <>
                <img alt='' onClick={(e) => { window.location.href = 'mailto:sabersonsabson@gmail.com'; }} src={gmail} className={`${styles.gmail}`} data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700" />
                <a href='tel:1030393815'></a><img alt='' src={call} className={`${styles.call}`} data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700" />
                <a href='https://www.linkedin.com/in/saber-son-b100b4177/'> <img alt='' src={linkedin} className={`${styles.linkedin}`} data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700" /></a>
                <a href='https://github.com/muhamedsaber'><img alt='' src={git} className={`${styles.git}`} data-aos="flip-up" /></a>
                <a href='https://www.behance.net/mohamedsaber17'><img alt='' src={benhance} className={`${styles.benhance}`} data-aos="flip-up" /></a>
                <a href='https://www.youtube.com/@saberson1'><img alt='' src={youtube} className={`${styles.youtube}`} data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700" /></a>
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