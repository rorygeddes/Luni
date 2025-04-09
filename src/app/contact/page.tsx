"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
    loading: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true });
    
    // Simulate form submission
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        message: "",
        submitted: true,
        loading: false
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
              <p className="mt-4 text-gray-300 max-w-lg">
                Have questions about Luni or want to learn more about how we can help you manage your finances? 
                We&apos;d love to hear from you!
              </p>
              
              {formState.submitted ? (
                <div className="mt-10 p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-xl font-medium text-white">Message Sent!</h3>
                  </div>
                  <p className="mt-2 text-gray-300">
                    Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    className="mt-4 text-blue-400 hover:text-blue-300 font-medium"
                    onClick={() => setFormState({ ...formState, submitted: false })}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="block w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="block w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="block w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formState.loading}
                    className={`px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-blue-500/30 w-full flex items-center justify-center ${
                      formState.loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {formState.loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
            
            <div className="hidden lg:block">
              <div className="relative h-[500px] w-full max-w-[500px]">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl transform rotate-3"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="p-8 h-full flex flex-col items-center justify-center">
                    <div className="h-16 w-16 relative text-blue-500 mb-6">
                      <Image 
                        src="/logo.svg"
                        alt="Luni Logo" 
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center mb-4">Connect with Us</h3>
                    <div className="space-y-6 w-full max-w-md">
                      <div className="flex items-center p-4 bg-slate-800/50 rounded-lg">
                        <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Email</div>
                          <div className="text-white">support@luni.dev</div>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-slate-800/50 rounded-lg">
                        <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">App Support</div>
                          <div className="text-white">Download from App Store soon</div>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-slate-800/50 rounded-lg">
                        <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">FAQ</div>
                          <div className="text-white">Visit our help center</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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