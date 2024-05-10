import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import BottomNavbar from '../components/DrawerNav/BottomNavbar';
import City from '../components/city/City';
import Navbar from '@/components/navbar/Navbar';
import Loader from '@/components/Loader/Loader';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="w-full flex justify-center items-center my-4">
            <img src="./assets/img/homebanner.png" alt="herobanner" />
          </div>
          <City />
          <BottomNavbar />
        </>
      )}
    </HelmetProvider>
  );
};
