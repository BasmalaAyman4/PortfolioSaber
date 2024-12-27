import React, { useState } from 'react';
import img1 from '../../assets/images/backCard.webp';
import img2 from '../../assets/images/backCard2.webp';
import img3 from '../../assets/images/backCard3.webp';
import img4 from '../../assets/images/backCard4.webp';
import styles from '../../Styles/Home.module.css';
import { motion, AnimatePresence } from "framer-motion";
import { Container } from 'react-bootstrap';
import mhi from '../../assets/images/mhi.png'
import tarweej from '../../assets/images/tarweej.png'
import beneshty from '../../assets/images/beneshty.webp'
import rafiq from '../../assets/images/rafiq.png';
import play1 from '../../assets/images/play1.jpg'
import play2 from '../../assets/images/play2.jpg'
import play3 from '../../assets/images/play3.jpg'

const FourthSec = () => {
    const [select, setSelect] = useState('Projects');

    return (
        <>
            <section className={`${styles.projec__sec}`}>
                <div className={`${styles.speciality}`}>
                    <p className={`${styles.speciality__para}`}>My Speciality</p>
                </div>
                <h1 className={`${styles.speciality__title}`}>Projects & Tech Tutorials</h1>
                <div className={`${styles.filter__body}`}>
                    <p onClick={() => setSelect('Projects')} className={`${select === 'Projects' ? styles.active : ''}`}>Projects</p>
                    <p onClick={() => setSelect('courses')} className={`${select === 'courses' ? styles.active : ''}`}>Courses</p>
                    <p onClick={() => setSelect('Design')} className={`${select === 'Design' ? styles.active : ''}`}>Design</p>
                </div>
            </section>


            <AnimatePresence mode="wait">
                {select === 'Projects' && (
                    <motion.div
                        key="Projects"
                        initial={{ opacity: 0, scale: 0.8 }} // Zoom-out initial state
                        animate={{ opacity: 1, scale: 1 }}   // Zoom-in when entering
                        exit={{ opacity: 0, scale: 0.8 }}    // Zoom-out when exiting
                        transition={{ duration: 0.5, ease: "easeInOut" }}   // Adjust duration for smooth transition
                    >
                        <Container>
                            <div className={`${styles.cards__body}`}>
                                <main>
                                    <div className={`${styles.card}`}>
                                        <img src={img1} alt="" className={`${styles.card__img}`} />
                                        <div className={`${styles.card__logo}`}>
                                            <img alt='' src={mhi} className={`${styles.logo__img}`} />
                                            <p>Misr Health Insurance</p>
                                        </div>
                                        <div className={`${styles.card__content}`}>
                                            <div>
                                                <h5>Misr Health Insurance(MHI)</h5>
                                                <p>
                                                    Developed a digital platform for Misr Health Insurance (MHI) to enhance user experience and service delivery.
                                                    Enabled beneficiaries to access insurance details, manage claims, and connect with healthcare providers.
                                                    Focused on improving operational efficiency, transparency, and data security.
                                                </p>
                                            </div>

                                            <button className={`${styles.learn__more}`}>
                                                <span className={`${styles.circle}`} aria-hidden="true">
                                                    <span className={`${styles.icon} ${styles.arrow}`}></span>
                                                </span>
                                                <span className={`${styles.button__text}`}>Read More</span>
                                            </button>
                                        </div>
                                    </div>
                                </main>
                                <main>
                                    <div className={`${styles.card}`}>
                                        <img src={img2} alt="" className={`${styles.card__img}`} />
                                        <div className={`${styles.card__logo}`}>
                                            <img alt='' src={tarweej} className={`${styles.logo__img}`} />
                                            <p>Tarweej</p>
                                        </div>
                                        <div className={`${styles.card__content}`}>
                                            <div>
                                                <h5>Tarweej</h5>
                                                <p>
                                                    Developed the Tarweej platform, a user-friendly photo editing app for creative enthusiasts.
                                                    Implemented multiple authentication methods including Facebook, Google, GitHub, Twitter, and phone.
                                                    Enabled users to easily edit photos, create collages, and fine-tune images with precision.

                                                </p>
                                            </div>

                                            <button className={`${styles.learn__more}`}>
                                                <span className={`${styles.circle}`} aria-hidden="true">
                                                    <span className={`${styles.icon} ${styles.arrow}`}></span>
                                                </span>
                                                <span className={`${styles.button__text}`}>Read More</span>
                                            </button>
                                        </div>
                                    </div>
                                </main>
                                <main>
                                    <div className={`${styles.card}`}>
                                        <img src={img3} alt="" className={`${styles.card__img}`} />
                                        <div className={`${styles.card__logo}`}>
                                            <img alt='' src={beneshty} className={`${styles.logo__img2}`} />
                                            <p>BeNeshty </p>
                                        </div>
                                        <div className={`${styles.card__content}`}>
                                            <div>
                                                <h5>BeNeshty </h5>
                                                <p>
                                                    BeNeshty is a mobile app featuring secure payments, real-time notifications, deep linking, and in-app chat.
                                                    Designed with a user-friendly interface and multi-language support to serve a diverse audience
                                                    Achieved over 300,000 downloads on app stores
                                                    Growth driven by regular optimizations and a focus on delivering an excellent user experience
                                                </p>
                                            </div>

                                            <button className={`${styles.learn__more}`}>
                                                <span className={`${styles.circle}`} aria-hidden="true">
                                                    <span className={`${styles.icon} ${styles.arrow}`}></span>
                                                </span>
                                                <span className={`${styles.button__text}`}>Read More</span>
                                            </button>
                                        </div>
                                    </div>
                                </main>
                                <main>
                                    <div className={`${styles.card}`}>
                                        <img src={img4} alt="" className={`${styles.card__img}`} />
                                        <div className={`${styles.card__logo}`}>
                                            <img alt='' src={rafiq} className={`${styles.logo__img}`} />
                                            <p className={`${styles.card__para}`}>Rafiq Safar </p>
                                        </div>
                                        <div className={`${styles.card__content}`}>
                                            <div>
                                                <h5>Rafiq Safar </h5>
                                                <p>
                                                    BeNeshty is a mobile app featuring secure payments, real-time notifications, deep linking, and in-app chat.
                                                    Designed with a user-friendly interface and multi-language support to serve a diverse audience
                                                    Achieved over 300,000 downloads on app stores
                                                    Growth driven by regular optimizations and a focus on delivering an excellent user experience
                                                </p>
                                            </div>

                                            <button className={`${styles.learn__more}`}>
                                                <span className={`${styles.circle}`} aria-hidden="true">
                                                    <span className={`${styles.icon} ${styles.arrow}`}></span>
                                                </span>
                                                <span className={`${styles.button__text}`}>Read More</span>
                                            </button>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </Container>
                    </motion.div>
                )}

                {select === 'courses' && (
                    <motion.div
                        key="courses"
                        initial={{ opacity: 0, scale: 0.8 }} // Zoom-out initial state
                        animate={{ opacity: 1, scale: 1 }}   // Zoom-in when entering
                        exit={{ opacity: 0, scale: 0.8 }}    // Zoom-out when exiting
                        transition={{ duration: 0.5, ease: "easeInOut" }}    // Adjust duration for smooth transition
                    >
                       
                            <div className={`${styles.playlist__body}`}>
                            <a href='https://youtube.com/playlist?list=PLdIyiVt7IcnFORarR2sBfoyN6Gg279ZI2&si=dI0PlnDjWYqRUEbD'>
                                <div className={`${styles.playlists}`}>
                                    <div className={`${styles.playlists__content}`}>
                                       <img alt='' src={play1}/>
                                    </div>
                                </div>
                            </a>
                            <a href='https://youtube.com/playlist?list=PLdIyiVt7IcnHvWBeBPMLZAf2CF1hPvVQl&si=2Rblunbx6BDUlVIm'>
                                <div className={`${styles.playlists}`}>
                                    <div className={`${styles.playlists__content}`}>
                                        <img alt='' src={play2} />
                                    </div>
                                </div>
                            </a>
                            <a href='https://youtube.com/playlist?list=PLdIyiVt7IcnEdAtQaOnI3yy9sf1A8cDjm&si=JQzKxQF_Aq1zOhaM'>
                                <div className={`${styles.playlists}`}>
                                    <div className={`${styles.playlists__content}`}>
                                        <img alt='' src={play3} />
                                    </div>
                                </div>
                            </a>
                            </div>
                       
                    </motion.div>
                )}

                {select === 'Design' && (
                    <motion.div
                        key="Design"
                        initial={{ opacity: 0, scale: 0.8 }} // Zoom-out initial state
                        animate={{ opacity: 1, scale: 1 }}   // Zoom-in when entering
                        exit={{ opacity: 0, scale: 0.8 }}    // Zoom-out when exiting
                        transition={{ duration: 0.5, ease: "easeInOut" }}   // Adjust duration for smooth transition
                    >
                        <Container>
                            <div className={`${styles.cards__body}`}>
                                <main>
                                    <div className="card">
                                        <img src={img1} alt="" />
                                        <div className="card-content">
                                            <div>
                                                <h2>Card Design</h2>
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                                                </p>
                                            </div>
                                            <a href="#" className="button">
                                                Find out more
                                                <span className="material-symbols-outlined">arrow_right_alt</span>
                                            </a>
                                        </div>
                                    </div>
                                </main>
                                <main>
                                    <div className="card">
                                        <img src={img1} alt="" />
                                        <div className="card-content">
                                            <div>
                                                <h2>Card Design</h2>
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                                                </p>
                                            </div>
                                            <a href="#" className="button">
                                                Find out more
                                                <span className="material-symbols-outlined">arrow_right_alt</span>
                                            </a>
                                        </div>
                                    </div>
                                </main>
                                <main>
                                    <div className="card">
                                        <img src={img1} alt="" />
                                        <div className="card-content">
                                            <div>
                                                <h2>Card Design</h2>
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
                                                </p>
                                            </div>
                                            <a href="#" className="button">
                                                Find out more
                                                <span className="material-symbols-outlined">arrow_right_alt</span>
                                            </a>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}

export default FourthSec;
