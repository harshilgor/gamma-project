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
                Streamline Your Payments Today
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-lg">Discover how our innovative solutions can transform your payment processing, enhancing efficiency and profitability for your business across Dubai and beyond.</p>
              <div className="flex justify-start">
                <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg">
                  <Link to="/solutions">Explore Solution</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Empower Your Financial Growth</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our innovative technology can transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Seamless Global Transactions</h3>
              <p className="text-gray-600 leading-relaxed">Effortlessly send and receive payments worldwide with our secure, user-friendly platform.</p>
              <button className="bg-orange-200 hover:bg-orange-300 text-gray-800 px-6 py-2 rounded transition-colors">
                More info
              </button>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Advanced Fraud Protection</h3>
              <p className="text-gray-600 leading-relaxed">Guard your business with cutting-edge security measures against fraudulent activities.</p>
              <button className="bg-orange-200 hover:bg-orange-300 text-gray-800 px-6 py-2 rounded transition-colors">
                More info
              </button>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Multi-Currency Payment Solutions</h3>
              <p className="text-gray-600 leading-relaxed">Process payments in diverse currencies to cater to international customers with ease.</p>
              <button className="bg-orange-200 hover:bg-orange-300 text-gray-800 px-6 py-2 rounded transition-colors">
                More info
              </button>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Instant Payment Notifications</h3>
              <p className="text-gray-600 leading-relaxed">Receive real-time alerts and updates on every transaction for better transparency.</p>
              <button className="bg-orange-200 hover:bg-orange-300 text-gray-800 px-6 py-2 rounded transition-colors">
                More info
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;