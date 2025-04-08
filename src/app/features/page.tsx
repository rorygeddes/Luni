import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Smart Budget Planning",
      description: "Our AI analyzes your spending patterns and creates personalized budget recommendations that adapt to your university lifestyle.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
          <path d="M12 2a10 10 0 0 1 10 10h-10V2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: "Split Expenses with Friends",
      description: "Easily track shared expenses with housemates and friends. Settle debts without awkward conversations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Financial Education",
      description: "Learn finance fundamentals with bite-sized tutorials designed specifically for students starting their financial journey.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    },
    {
      title: "Expense Tracking",
      description: "Automatically categorize your transactions and get visual insights into where your money is going.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10" />
          <path d="M18 20V4" />
          <path d="M6 20v-4" />
        </svg>
      )
    },
    {
      title: "Savings Goals",
      description: "Set savings targets for things that matter to you, from travel plans to emergency funds.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      )
    },
    {
      title: "Smart Notifications",
      description: "Get timely alerts about upcoming bills, unusual spending, or when you're about to exceed your budget limits.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Features</h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Luni.dev helps students manage their finances with ease
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-900/70 backdrop-blur-lg p-8 rounded-xl border border-white/10 shadow-xl hover:shadow-blue-500/10 transition-all"
              >
                <div className="text-blue-500 mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 backdrop-blur-md"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Built for Student Life</h2>
              <p className="text-gray-300 mb-6">
                Unlike traditional banking apps, Luni is designed specifically for university students dealing with:
              </p>
              <ul className="space-y-4">
                {[
                  "Irregular income from part-time jobs and student loans",
                  "Shared housing expenses with multiple housemates",
                  "Building credit history and financial literacy from scratch",
                  "Balancing social life costs with essential expenses",
                  "Planning for both short-term needs and post-graduation goals"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[500px] w-[300px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-3xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-blue-600/30 rounded-3xl transform -rotate-3"></div>
                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm rounded-3xl border border-white/10">
                  <div className="p-6 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div className="inline-block h-10 w-10 relative text-blue-500 mx-auto">
                        <Image 
                          src="/logo.svg"
                          alt="Luni Logo" 
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold mt-2 text-white">Coming Soon</h3>
                      <p className="text-gray-400 text-sm">Advanced Analytics Dashboard</p>
                    </div>
                    <div className="flex-grow bg-slate-800/50 rounded-lg p-4">
                      <div className="space-y-4">
                        <div>
                          <div className="h-4 w-3/4 bg-slate-700 rounded animate-pulse"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-slate-700 rounded animate-pulse"></div>
                          <div className="h-3 bg-slate-700 rounded animate-pulse"></div>
                          <div className="h-3 w-1/2 bg-slate-700 rounded animate-pulse"></div>
                        </div>
                        <div className="h-24 bg-slate-700 rounded animate-pulse"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-slate-700 rounded animate-pulse"></div>
                          <div className="h-3 bg-slate-700 rounded animate-pulse"></div>
                          <div className="h-3 w-1/2 bg-slate-700 rounded animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <div className="h-12 w-40 bg-blue-600/50 rounded-full flex items-center justify-center text-white font-medium">
                        Join Waitlist
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