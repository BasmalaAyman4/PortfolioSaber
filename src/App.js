import { useContext, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation  } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from './Layout/Nav'
import 'react-toastify/dist/ReactToastify.css';
import cookies from 'js-cookie'
import Routespage from './Routes';
function App() {

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
  const [IsLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsLoading(true); // Start loading when the location changes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>


        
     <Routespage/>
  

    </>
  );
}

export default App;
