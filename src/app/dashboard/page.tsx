"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block mb-8"
          >
            <div className="h-20 w-20 relative text-blue-500 mx-auto">
              <Image 
                src="/logo.svg"
                alt="Luni Logo" 
                fill
                className="object-contain"
              />
            </div>
            <motion.div 
              className="absolute -top-2 -right-2 bg-blue-600 rounded-full text-xs text-white px-2 py-1 font-medium"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3, type: "spring" }}
            >
              BETA
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Dashboard Coming Soon
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            We&apos;re working hard to bring you the ultimate student budgeting dashboard. 
            Sign up for early access and be the first to try our beta version.
          </motion.p>
          
          <motion.div
            className="bg-slate-900/70 backdrop-blur-lg p-8 rounded-xl border border-white/10 shadow-xl max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Join the Waitlist</h3>
            <p className="text-gray-400 mb-6">Get early access to our powerful budgeting tools.</p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-blue-500/30">
                Notify Me
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex flex-col sm:flex-row gap-8 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-xl border border-white/10 max-w-xs">
              <div className="text-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Coming in May 2023</h3>
              <p className="text-gray-400">We&apos;re working around the clock to launch the beta version next month.</p>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-xl border border-white/10 max-w-xs">
              <div className="text-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">200+ Beta Users</h3>
              <p className="text-gray-400">Join over 200 students already signed up for our early access program.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link 
              href="/"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              ← Back to Homepage
            </Link>
          </motion.div>
        </div>
      </section>
      
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 relative text-blue-500">
              <Image 
                src="/logo.svg"
                alt="Luni Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="ml-2 text-xl font-bold">Luni<span className="text-blue-500">.dev</span></span>
          </div>
          
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            © {new Date().getFullYear()} Luni.dev. Created by rorygeddes.
          </div>
        </div>
      </footer>
    </div>
  );
} 