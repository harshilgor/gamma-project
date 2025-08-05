import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">YourBrand</h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              We are a technology-based company committed to providing latest solutions 
              in payment processing and innovative business technologies. We empower our 
              partners to achieve high performance and seamless customer experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <p>Business Center</p>
              <p>123 Business Street</p>
              <p>City, State 12345</p>
              <p className="mt-4">
                <span className="block">Tel: +1 (555) 123-4567</span>
                <span className="block">Email: info@yourbrand.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2024 All Rights Reserved - YourBrand
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Crafted with excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;