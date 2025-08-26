import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <h2 className="text-sm font-medium mb-4 tracking-wide uppercase">
                EMPOWERING SEAMLESS TRANSACTIONS
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Innovative
                <br />
                Business Solutions
                <br />
                <span className="text-blue-200">for Modern Enterprises</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-lg">Discover how our innovative solutions can transform your payment processing, enhancing efficiency and profitability for your business across Dubai and beyond.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Placeholder for device/illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-96 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                <div className="text-white/60 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
                  <p>Product Showcase</p>
                  <p className="text-sm">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our innovative technology can transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Technology</h3>
              <p className="text-gray-600">Cutting-edge solutions powered by the latest innovations</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
              <p className="text-gray-600">Easy integration with your existing business systems</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance from our expert team</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;