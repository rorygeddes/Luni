import Image from "next/image";
import Navbar from "@/components/Navbar";
import PhoneTemplate from "@/components/PhoneTemplate";
import BudgetingApp from "@/components/BudgetingApp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-3xl"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                Smart Budgeting 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 block mt-2">
                  for Students
                </span>
              </h1>
              
              <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Empowering university students with AI-driven financial strategies,
                simplified budgeting tools, and personalized insights for smarter money management.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/dashboard"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-blue-500/30"
                >
                  Get Started
                </a>
                <a
                  href="#features"
                  className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium rounded-full transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <PhoneTemplate title="Luni">
                <BudgetingApp />
              </PhoneTemplate>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Why Students Love Luni</h2>
            <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
              Designed specifically for university life, Luni makes managing your finances intuitive and stress-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Budgeting",
                description: "AI-powered budget recommendations based on your spending habits and student lifestyle.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                    <path d="M12 2a10 10 0 0 1 10 10h-10V2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )
              },
              {
                title: "Bill Splitting",
                description: "Easily split expenses with housemates and track who owes what without awkward conversations.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                )
              },
              {
                title: "Finance Education",
                description: "Learn financial literacy with bite-sized tutorials tailored for university students.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-900/70 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-xl">
                <div className="text-blue-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-indigo-900/20 backdrop-blur-xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to take control of your finances?</h2>
          <p className="text-gray-300 mb-10 max-w-3xl mx-auto">
            Join thousands of students who are mastering their money with Luni. 
            Connect your accounts, set your goals, and watch your savings grow.
          </p>
          <a
            href="/dashboard"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-blue-500/30 text-lg"
          >
            Start Budgeting For Free
          </a>
        </div>
      </section>
      
      {/* Footer */}
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
