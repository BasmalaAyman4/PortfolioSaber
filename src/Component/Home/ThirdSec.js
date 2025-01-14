import React, { useEffect, useState } from 'react'
import styles from '../../Styles/Home.module.css'
import Aos from 'aos'
import { Container } from 'react-bootstrap'
const ThirdSec = () => {
    useEffect(() => {
        Aos.init({
            once: true, // Animations will trigger only once
            duration: 800, // Set default animation duration
            easing: 'ease-in-sine', // Default easing
        });
    }, []);
    return (

        <>
            <section className={`${styles.ThirdSec}`}>
                <Container>
                    <h2 className={`${styles.skills__title}`}>The Journey of Skills </h2>
                    <div className={`${styles.lines__body}`}>
                        <div className={`${styles.line__top}`}></div>
                        <div className={`${styles.line__bottom}`}></div>
                        <div className={`${styles.lines__one}`} data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="800">
                            <div className={`${styles.line__onee}`}></div>

                        </div>
                        <div className={`${styles.lines__two}`} data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="800">
                            <div className={`${styles.line__twoo}`}></div>
                        </div>
                        <div className={`${styles.lines__three}`} data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="800">
                            <div className={`${styles.line__three}`}></div>
                        </div>
                        <div className={`${styles.lines__four}`} data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="800">

                            <div className={`${styles.line__fourr}`}></div>
                        </div>
                        <div className={`${styles.lines__five}`} data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="800">

                            <div className={`${styles.line__fivee}`}></div>
                        </div>
                    </div>
                    <div className={`${styles.row}`} >
                        <div className={`${styles.col} ${styles.skill__one}`} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1200" >
                            <hr className={`${styles.line__left}`} />
                            <div>
                                <h2>Programming Languages</h2>
                                <p className={`${styles.title__linee}`}></p>
                            </div>
                            <div>
                                <ul className={`${styles.ul__body}`}>
                                    <li>Dart</li>
                                    <li> Asynchronous Programming</li>
                                    <li>OOP</li>
                                    <li>SOLID</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.col} ${styles.skill__two}`} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1200">
                            <hr className={`${styles.line__right}`} />
                            <div>
                                <h2>Flutter </h2>
                                <p className={`${styles.title__linee}`}></p>
                            </div>
                            <div>
                                <ul className={`${styles.ul__body}`}>
                                    <li>Provider</li>
                                    <li>  Bloc (Cubit) </li>
                                    <li>Firebase</li>
                                    <li>Hive</li>
                                    <li>Retrofit</li>
                                    <li> JSON Serialization</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.col} ${styles.skill__three}`} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1200">
                            <hr className={`${styles.line__left}`} />
                            <div>
                                <h2>Development Practices </h2>
                                <p className={`${styles.title__linee}`}></p>
                            </div>
                            <div>
                                <ul className={`${styles.ul__body}`}>
                                    <li> Clean Code</li>
                                    <li>   RESTful API </li>
                                    <li> UI Development</li>
                                    <li>Debugging</li>
                                    <li>Testing</li>
                                    <li>  CI/CD </li>
                                    <li>   App Deployment </li>

                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.col} ${styles.skill__four}`} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1200">
                            <hr className={`${styles.line__right}`} />
                            <div>
                                <h2>Methodologies  </h2>
                                <p className={`${styles.title__linee}`}></p>
                            </div>
                            <div>
                                <ul className={`${styles.ul__body}`}>
                                    <li> Agile </li>
                                    <li>  SDLC </li>
                                    <li> MVVM</li>
                                    <li> Clean Architecture</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.col} ${styles.skill__five}`} data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1200">
                            <hr className={`${styles.line__left}`} />
                            <div>
                                <h2>Tools  </h2>
                                <p className={`${styles.title__linee}`}></p>
                            </div>
                            <div>
                                <ul className={`${styles.ul__body}`}>
                                    <li>  GitHub </li>
                                    <li>    VS Code  </li>
                                    <li>  Android Studio </li>
                                    <li>Figma</li>
                                    <li> Fastlane</li>
                                    <li>   Adobe XD </li>
                                    <li>    Google Play  </li>

                                </ul>
                            </div>
                        </div>
                    </div>



                </Container>
            </section>
        </>
    )
}

export default ThirdSec
