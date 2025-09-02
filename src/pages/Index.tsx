import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Index = () => {
  const scrollableCardsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-white">
             {/* First Hero Section - What users see first */}
       <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Streamline Your Payments Today!
            </h1>
            <p className="text-lg text-white leading-relaxed mb-12 max-w-3xl mx-auto">
              Enhance your business operations with our seamless, secure, and efficient payment processing technology.
            </p>
            <Button asChild className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition-all duration-300">
              <Link to="/contact">
                Contact Sales <span className="ml-2">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              About Us
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              GAMA International is a trusted service provider in the electronic payments industry, working in close partnership with Arab Financial Services, a leading banking and fintech institution in the region. Our collaboration enables us to deliver secure, efficient, and scalable payment solutions tailored to the needs of businesses across multiple sectors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide and manage advanced point of sale (POS) terminals that support all major debit and credit cards, including Visa and Mastercard. Whether serving small businesses or large retail operations, our focus is on helping merchants accept payments with ease, speed, and confidence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong presence across the Middle East, GAMA International combines innovation, compliance, and hands-on support to ensure our clients receive end-to-end service from onboarding to daily operations. Our goal is to drive sustainable growth for our merchants through reliable technology and responsive customer care.
            </p>
          </div>
        </div>
      </section>

      {/* Second Hero Section - "It's time to revolutionize" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              It's time to revolutionize
            </h2>
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <div className="text-blue-600 animate-glow-1">Payments.</div>
              <div className="text-blue-600 animate-glow-2">Transactions.</div>
              <div className="text-blue-600 animate-glow-3">Commerce.</div>
              <div className="text-blue-600 animate-glow-4">Business growth.</div>
              <div className="text-blue-600 animate-glow-5">Really everything.</div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Integrated Payment Solutions Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     {/* Left Content Area */}
           <div className="relative z-10 mb-16">
             <p className="text-sm font-medium mb-6 tracking-wide uppercase text-gray-600">OUR SERVICES</p>
             <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
               Completely Integrated, End-to-end Payment Solutions
             </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl font-light">
              RFM owns and manages a POS terminal network for First Abu Dhabi Bank across UAE, processing credit and debit cards at retails. Our services include catered solutions for in-store and online payment acceptance.
            </p>
          </div>
          
          {/* Full Width Horizontal Scrollable Cards */}
          <div className="relative w-full">
            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide" ref={scrollableCardsRef}>
              {/* Card 1 - Seamless Global Transactions */}
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 border border-gray-300">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 002 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Global Transactions</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The future of payments is defined by an unwavering commitment to security and an unrelenting pursuit of exceptional performance.
                </p>
                <div className="w-full h-px bg-gray-300"></div>
              </div>
              
              {/* Card 2 - Advanced Fraud Protection */}
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 border border-gray-300">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Fraud Protection</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our strategy is anchored in world-class, interconnected security systems that are uniquely positioned to drive growth and value for businesses and clients.
                </p>
                <div className="w-full h-px bg-gray-300"></div>
              </div>
              
              {/* Card 3 - Multi-Currency Solutions */}
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 border border-gray-300">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Currency Solutions</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We put our expertise, technology, and capital to work through innovative payment programs serving businesses across diverse global markets.
                </p>
                <div className="w-full h-px bg-gray-300"></div>
              </div>
              
              {/* Card 4 - Instant Payment Notifications */}
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 border border-gray-300">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Payment Notifications</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Receive real-time alerts and updates on every transaction for better transparency.
                </p>
                <div className="w-full h-px bg-gray-300"></div>
              </div>

              {/* Card 5 - Comprehensive Merchant Support */}
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 border border-gray-300">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Merchant Support</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Access 24/7 support tailored to optimize your payment processes and business growth.
                </p>
                <div className="w-full h-px bg-gray-300"></div>
              </div>

              {/* Card 6 - Integrated Payment Gateway */}
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 border border-gray-300">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrated Payment Gateway</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Easily integrate our gateway with existing systems to streamline all your transactions.
                </p>
                <div className="w-full h-px bg-gray-300"></div>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* Testimonials Section - Cursor Style */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-left mb-16">
             <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-tight">
               What our clients have to say for us
             </h2>
             <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
               Real feedback from businesses that trust Gama International for their payment solutions.
             </p>
           </div>
          
          {/* Horizontal Testimonials Carousel */}
          <div className="relative">
                         <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
               {/* Testimonial 1 - Ahmed Khalifa */}
               <div className="flex-shrink-0 w-80 bg-black rounded-xl p-8 border border-gray-800 hover:border-white transition-colors duration-300 relative">
                 <p className="text-white leading-relaxed mb-20 text-base">
                   "Gama International transformed our merchant payment processing with their top-notch technology and exceptional customer service. Their reliable and efficient platform has driven our growth in the UAE market. A must-have partner for any business seeking innovation!"
                 </p>
                 <div className="absolute bottom-8 left-8 flex items-center">
                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                     AK
                   </div>
                   <div>
                     <p className="font-semibold text-white text-base">Ahmed Khalifa</p>
                     <p className="text-gray-400 text-sm">Business Owner, UAE</p>
                   </div>
                 </div>
               </div>

               {/* Testimonial 2 - Sarah Al Mansouri */}
               <div className="flex-shrink-0 w-80 bg-black rounded-xl p-8 border border-gray-800 hover:border-white transition-colors duration-300 relative">
                 <p className="text-white leading-relaxed mb-20 text-base">
                   "Gama International has revolutionized our financial operations with their cutting-edge merchant acquiring solutions. Their seamless integration and robust support have been invaluable. Highly recommended for any company aiming for excellence in payment processing within the UAE"
                 </p>
                 <div className="absolute bottom-8 left-8 flex items-center">
                   <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                     SM
                   </div>
                   <div>
                     <p className="font-semibold text-white text-base">Sarah Al Mansouri</p>
                     <p className="text-gray-400 text-sm">Finance Director, Dubai</p>
                   </div>
                 </div>
               </div>

               {/* Testimonial 3 - Omar Hassan */}
               <div className="flex-shrink-0 w-80 bg-black rounded-xl p-8 border border-gray-800 hover:border-white transition-colors duration-300 relative">
                 <p className="text-white leading-relaxed mb-20 text-base">
                   "Gama International made our payment processing seamless and efficient. Their innovative solutions and dedicated support have significantly enhanced our business operations. We highly recommend their services to any merchant looking for reliable financial technology solutions"
                 </p>
                 <div className="absolute bottom-8 left-8 flex items-center">
                   <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                     OH
                   </div>
                   <div>
                     <p className="font-semibold text-white text-base">Omar Hassan</p>
                     <p className="text-gray-400 text-sm">CEO, Abu Dhabi</p>
                   </div>
                 </div>
               </div>
             </div>

                         {/* Pagination Dots */}
             <div className="flex justify-center mt-8 space-x-2">
               <div className="w-2 h-2 bg-white rounded-full"></div>
               <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
               <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Streamline Payments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">Streamline Your Payments Today!</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl font-light">Enhance your business operations with our seamless, secure, and efficient payment processing technology. Join the future of financial technology and experience hassle-free merchant acquiring today.</p>
          <Button asChild className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition-all duration-300">
            <Link to="/contact">
              Contact Sales <span className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;