import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Router } from 'react-router-dom';
import cookies from 'js-cookie'
import Loading from './Global/Loading';
import Nav from './Layout/Nav'
import Home from './Pages/Home';

const Routespage = () => {
    const currentLanguageCode = cookies.get('i18next') || 'ar'
    console.log(currentLanguageCode)
    useEffect(() => {
        // Set the direction based on the language code
        document.body.setAttribute('dir', currentLanguageCode === 'ar' ? 'rtl' : 'ltr');

        // Clean up by removing the attribute when the component unmounts or language changes
        return () => {
            document.body.removeAttribute('dir');
        };
    }, [currentLanguageCode]);
    const [iLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Duration for the initial load

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setIsLoading(true); // Start loading when the location changes
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Duration for page transitions

        return () => clearTimeout(timer);
    }, [location]);


    return (
        <div className={currentLanguageCode === 'ar' ? 'arabic' : 'english'} dir={currentLanguageCode === 'ar' ? 'rtl' : 'ltr'}>
            {
                iLoading ?
                    <Loading iLoading={iLoading} location={location}/>
                    :
                    <>
                    <Nav/>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </>
            }
        </div>
    );
};

export default Routespage
