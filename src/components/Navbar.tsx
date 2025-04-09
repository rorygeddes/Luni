"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/5">
      <div className="section-container">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 relative">
                <Image 
                  src="/logo.svg"
                  alt="Studentea Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="ml-2 text-lg font-medium">Studentea</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 