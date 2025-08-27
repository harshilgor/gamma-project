import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wider uppercase text-medium-gray">
              SOLUTIONS
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/solutions" className="text-white hover:text-orange transition-colors duration-200">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/pos" className="text-white hover:text-orange transition-colors duration-200">
                  POS Solutions
                </Link>
              </li>
              <li>
                <Link to="/ecom" className="text-white hover:text-orange transition-colors duration-200">
                  E-commerce Integration
                </Link>
              </li>
              <li>
                <Link to="/pay-by-link" className="text-white hover:text-orange transition-colors duration-200">
                  Pay by Link
                </Link>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  Mobile Payments
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  Fraud Protection
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wider uppercase text-medium-gray">
              RESOURCES
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  Client Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  Integration Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  Partner Network
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wider uppercase text-medium-gray">
              COMPANY
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-white hover:text-orange transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-orange transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  News & Press
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wider uppercase text-medium-gray">
              CONNECT
            </h4>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-orange transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.110.221.082.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.754-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-medium-gray text-sm">
              © 2024 GAMA International Payment Services Provider. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              <a href="#" className="text-medium-gray hover:text-white transition-colors duration-200">
                Privacy and Cookies
              </a>
              <a href="#" className="text-medium-gray hover:text-white transition-colors duration-200">
                Terms & Conditions
              </a>
              <a href="#" className="text-medium-gray hover:text-white transition-colors duration-200">
                Security & Fraud Awareness
              </a>
              <a href="#" className="text-medium-gray hover:text-white transition-colors duration-200">
                Regulatory Disclosures
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;