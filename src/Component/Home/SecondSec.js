import React, { useEffect, useState } from 'react'
import styles from '../../Styles/Home.module.css'
import Aos from 'aos'
import { Container } from 'react-bootstrap';
import arrow from '../../assets/images/lines.png'
const SecondSec = () => {
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        Aos.init();
    }, [])
  return (
    <>
    <section className={`${styles.SecondSec}`}>
        <Container>
                  <h2 className={`${styles.SecondSec__title}`} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="800">What I can do?</h2>
                  <div className={`${styles.arrow__steps}`} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="800">
                      <img alt='' src={arrow} className={`${styles.arrow}`} />
                      <div className={`${styles.one}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" >
                              <circle id="Ellipse 909" cx="24" cy="24" r="24" className={`${styles.svgcircle}`} />
                          </svg>                          <p>1</p>
                      </div>
                      <div className={`${styles.two}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" >
                              <circle id="Ellipse 909" cx="24" cy="24" r="24" className={`${styles.svgcircle}`} />
                          </svg>                          <p>2</p>
                      </div>
                      <div className={`${styles.three}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" >
                              <circle id="Ellipse 909" cx="24" cy="24" r="24" className={`${styles.svgcircle}`} />
                          </svg>                          <p>3</p>
                      </div>
                      <div className={`${styles.four}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" >
                              <circle id="Ellipse 909" cx="24" cy="24" r="24" className={`${styles.svgcircle}`} />
                          </svg>                          <p>4</p>
                      </div>
                  </div>
                  <div className={`${styles.parts}`}>
                     
                      <div className={`${styles.part}`} data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="800">
                          <h3>Mobile Development</h3>
                          <p>Building engaging mobile apps for iOS and Android platforms</p>
                      </div>
                      <div className={`${styles.part}`} data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="800">
                          <h3>UI/UX Design </h3>
                          <p>Crafting intuitive designs that enhance user experience and engagement.</p>
                      </div>
                      <div className={`${styles.part}`} data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="800">
                          <h3>Rapid Prototyping  </h3>
                          <p>Quickly creating interactive prototypes to streamline app development and feedback</p>
                      </div>
                      <div className={`${styles.part}`} data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="800">
                          <h3>Technical Writing  </h3>
                          <p>Producing clear documentation to simplify complex concepts and processes.</p>
                      </div>
                  </div>
        </Container>

    </section>

    </>
  )
}

export default SecondSec
