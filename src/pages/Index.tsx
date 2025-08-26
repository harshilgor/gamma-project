import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            {/* Left Content Section */}
            <div className="bg-background flex items-center px-8 md:px-16 lg:px-20 py-20">
              <div className="w-full max-w-xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
                  One platform.
                  <br />
                  <span className="block">Endless</span>
                  <span className="block">possibilities.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                  Meet our single solution, designed to turn payments into revenue. Take control of end-to-end payments, data, and financial management all-in-one platform.
                </p>
                
                <Button 
                  asChild
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold rounded-lg"
                >
                  <Link to="/contact">Talk to our Dubai team</Link>
                </Button>
              </div>
            </div>

            {/* Right Visual Section */}
            <div className="bg-slate-900 flex items-center justify-center relative overflow-hidden">
              {/* 3D Layered Cards Illustration */}
              <div className="relative w-96 h-96 perspective-1000">
                {/* Bottom layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 transform rotate-3 translate-y-4"></div>
                
                {/* Middle layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border border-slate-600 transform -rotate-1 translate-y-2"></div>
                
                {/* Top layer with green accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl border border-slate-500 transform rotate-1 relative overflow-hidden">
                  {/* Green accent dots */}
                  <div className="absolute top-16 left-16 w-4 h-4 bg-green-400 rounded-full opacity-80"></div>
                  <div className="absolute top-24 left-32 w-2 h-2 bg-green-300 rounded-full opacity-60"></div>
                  <div className="absolute bottom-20 right-20 w-6 h-6 bg-green-500 rounded-full opacity-70"></div>
                  <div className="absolute bottom-32 right-32 w-3 h-3 bg-green-400 rounded-full opacity-50"></div>
                  
                  {/* Geometric lines */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                      <path d="M100 300 L300 300 L300 100 L100 100 Z" stroke="currentColor" strokeWidth="1" className="text-green-400"/>
                      <path d="M120 280 L280 280 L280 120 L120 120 Z" stroke="currentColor" strokeWidth="1" className="text-slate-400"/>
                      <path d="M140 260 L260 260 L260 140 L140 140 Z" stroke="currentColor" strokeWidth="1" className="text-slate-300"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Background accent elements */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Payment Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage payments, grow revenue, and scale your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-background rounded-lg border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Global Payments</h3>
              <p className="text-muted-foreground">Accept payments from anywhere in the world with multi-currency support</p>
            </div>
            
            <div className="text-center p-8 bg-background rounded-lg border">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Real-time Analytics</h3>
              <p className="text-muted-foreground">Track performance and gain insights with comprehensive reporting tools</p>
            </div>
            
            <div className="text-center p-8 bg-background rounded-lg border">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-purple-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Enterprise Security</h3>
              <p className="text-muted-foreground">Bank-level security with PCI DSS compliance and fraud protection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
