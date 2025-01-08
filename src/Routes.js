import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Router } from 'react-router-dom';
import cookies from 'js-cookie'
import Nav from './Layout/Nav'
import Home from './Pages/Home';
import FirstSec from './Component/Home/FirstSec';
import SecondSec from './Component/Home/SecondSec';
import ThirdSec from './Component/Home/ThirdSec';
import FourthSec from './Component/Home/FourthSec';

const Routespage = () => {
    const [loading, setLoading] = useState(true); // Controls preloader
    const [transitionDone, setTransitionDone] = useState(false); // Controls background animation

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setTimeout(() => setTransitionDone(true), 2000); // Delay for red background animation
        }, 3000); // Preloader duration
        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, []);


    return (
   <>
            {loading ? (
        <div className="preloader">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path
              id="preloaderSvg"
              d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
            ></path>
          </svg>
          <div className="preloader-heading">
            <div className="load-text">
              <span>L</span>
              <span>o</span>
              <span>a</span>
              <span>d</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </div>
          </div>
        </div>
            )
            :
            (
                    <div className={`app-content ${transitionDone ? "transition-done" : ""}`}>
<Nav/>
                        <FirstSec/>
                        <SecondSec/>
                        <ThirdSec/>
                        <FourthSec/>
                        </div>
            )}
          </>
       
    );
};

export default Routespage
