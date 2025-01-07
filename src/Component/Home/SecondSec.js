import React, { useEffect, useRef, useState } from 'react'
import styles from '../../Styles/Home.module.css'
import Aos from 'aos'
import { Container } from 'react-bootstrap';
import arrow from '../../assets/images/lines.png'
const SecondSec = () => {
 /*    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
        Aos.init();
    }, []) */
    const [currentService, setCurrentService] = useState(0);
    const services = [
        { title: "Mobile Development", description: "I develop intuitive mobile applications for iOS and Android, focusing on user experience, performance, and seamless integration with modern technologies." },
        { title: "UI/UX Design", description: "Showcasing my Flutter projects, tech tutorials, and UI/UX designs, blending creativity and functionality to enhance user experiences in applications." },
        { title: "Rapid Prototyping", description: "Rapid Prototyping for Flutter enables quick design iterations, allowing developers to transform ideas into interactive prototypes efficiently and effectively." },
        { title: "Technical Writing", description: "Technical writing enhances understanding through clear documentation, guides, and tutorials, bridging gaps between complex concepts and user comprehension in Flutter." },
    ];
    const activeBgRef = useRef(null);

    const handleMouseEnter = (index) => {
        setCurrentService(index);
    };

    const handleMouseLeave = () => {
        setCurrentService(-1);
    };

    const updateActiveBg = () => {
        const activeBg = activeBgRef.current;
        if (activeBg) {
            const currentItem = document.querySelector(`.service-item-${currentService}`);
            if (currentItem) {
                const { offsetTop, offsetHeight } = currentItem;
                activeBg.style.top = `${offsetTop}px`;
                activeBg.style.height = `${offsetHeight}px`;
            }
        }
    };

    useEffect(() => {
        updateActiveBg();
    }, [currentService]);

  return (
    <>
   {/*  <section className={`${styles.SecondSec}`}>
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

    </section> */}
          <section className="services-section" id="services-section">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="section-header text-center">
                              <h2 className="section-title">What I Can Do?</h2>
                              
                          </div>
                      </div>
                  </div>

                  <div className="row" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="800">
                      <div className="col-md-12">
                          <div className="services-widget position-relative">
                              <div ref={activeBgRef} className="active-bg"></div>
                              {services.map((service, index) => (
                                  <div
                                      key={index}
                                      className={`service-item service-item-${index} ${currentService === index ? "current" : ""}`}
                                      onMouseEnter={() => handleMouseEnter(index)}
                                      onMouseLeave={handleMouseLeave}
                                      onClick={() => setCurrentService(index)}
                                      
                                  >
                                      <div className="left-box d-flex  align-items-center">
                                          <span className="number">{String(index + 1).padStart(2, "0")}</span>
                                          <h3 className="service-title">{service.title}</h3>
                                      </div>
                                      <div className="right-box">
                                          <p>{service.description}</p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    </>
  )
}

export default SecondSec
