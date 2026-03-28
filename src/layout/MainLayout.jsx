import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Head from './Head';
import Footer from '../layout/Footer';
import { motion } from "motion/react";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Head />

      <main className="flex-1 w-full pt-4 md:pt-16">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Outlet />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}