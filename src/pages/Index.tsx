import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Streamline Your Payments Today
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-3xl font-light">
              Discover how our innovative solutions can transform your payment processing, enhancing efficiency and profitability for your business across Dubai and beyond.
            </p>
            <Button asChild variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-base font-medium">
              <Link to="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-sm font-medium mb-6 tracking-wide uppercase text-gray-600">OUR SERVICES</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 leading-tight max-w-4xl" style={{ fontFamily: 'Georgia, serif' }}>
              We aspire to be the world's most exceptional payment institution.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm">Global Payments</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black">Seamless Global Transactions</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                The future of payments is defined by an unwavering commitment to security and an unrelenting pursuit of exceptional performance.
              </p>
              <a href="#" className="text-black text-sm font-medium underline hover:no-underline transition-all">
                Discover Our Payment Solutions
              </a>
            </div>
            
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm">Security Shield</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black">Advanced Fraud Protection</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Our strategy is anchored in world-class, interconnected security systems that are uniquely positioned to drive growth and value for businesses and clients.
              </p>
              <a href="#" className="text-black text-sm font-medium underline hover:no-underline transition-all">
                Learn About Our Security
              </a>
            </div>
            
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm">Multi-Currency</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black">Multi-Currency Solutions</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                We put our expertise, technology, and capital to work through innovative payment programs serving businesses across diverse global markets.
              </p>
              <a href="#" className="text-black text-sm font-medium underline hover:no-underline transition-all">
                Explore Currency Options
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Text Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              It's time to revolutionize
            </h2>
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="inline-block mr-4 text-gray-400 animate-glow-1">Payments.</span>
              <span className="inline-block mr-4 text-gray-400 animate-glow-2">Transactions.</span>
              <br />
              <span className="inline-block mr-4 text-gray-400 animate-glow-3">Commerce.</span>
              <span className="inline-block mr-4 text-gray-400 animate-glow-4">Business growth.</span>
              <br />
              <span className="inline-block text-gray-400 animate-glow-5">Really everything.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Transactions Section */}
      <section className="py-20 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Empower Your Global Transactions
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-12 max-w-3xl mx-auto">
            Gama International Payment Service Provider streamlines your global financial operations 
            with cutting-edge technology. Expand your reach effortlessly with secure, efficient, and 
            reliable merchant acquiring solutions. Elevate your business potential by embracing seamless 
            international transactions today.
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-4 text-lg font-semibold">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </section>

      {/* Streamline Payments Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Streamline Your Payments Today
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-2xl font-light">
              Enhance your business operations with our seamless, secure, and efficient payment processing technology. Join the future of financial technology and experience hassle-free merchant acquiring today.
            </p>
            <Button asChild variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-base font-medium">
              <Link to="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;