import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Head from './Head';
import Footer from '../layout/Footer';
import { motion } from "motion/react";

export default function MainLayout() {
  const location = useLocation();

  return (
  
    <div className="relative w-full"> 
      <Head />
      <main className="w-full">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <Outlet />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
