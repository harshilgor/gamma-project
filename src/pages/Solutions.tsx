import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect payment solution for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">POS System</h3>
            <p className="text-gray-600 mb-6">Complete point-of-sale solution for retail businesses</p>
            <Button asChild className="w-full">
              <Link to="/solutions/pos">Learn More</Link>
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">E-commerce</h3>
            <p className="text-gray-600 mb-6">Online payment processing for e-commerce platforms</p>
            <Button asChild className="w-full">
              <Link to="/solutions/ecom">Learn More</Link>
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Pay by Link</h3>
            <p className="text-gray-600 mb-6">Send payment links directly to your customers</p>
            <Button asChild className="w-full">
              <Link to="/solutions/pay-by-link">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;