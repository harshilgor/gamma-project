import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* First Hero Section - What users see first */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Streamline Your Payments Today!
            </h1>
            <p className="text-lg text-white leading-relaxed mb-8 max-w-3xl mx-auto">
              Enhance your business operations with our seamless, secure, and efficient payment processing technology.
            </p>
            <p className="text-lg text-white leading-relaxed mb-12 max-w-3xl mx-auto">
              Join the future of financial technology and experience hassle-free merchant acquiring today.
            </p>
            <Button asChild className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition-all duration-300">
              <Link to="/contact">
                Contact Sales <span className="ml-2">→</span>
              </Link>
            </Button>
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-left">
            <p className="text-sm font-medium mb-6 tracking-wide uppercase text-gray-600">OUR SERVICES</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 leading-tight max-w-4xl" style={{ fontFamily: 'Georgia, serif' }}>
              We aspire to be the world's most exceptional payment institution.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="/Transactions.jpg" 
                    alt="Seamless Global Transactions - Global payment processing illustration"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <div class="text-gray-500 text-center">
                            <div class="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                            <p class="text-sm">Global Payments</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
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
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="/Fraud.png" 
                    alt="Advanced Fraud Protection - Security and fraud prevention illustration"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <div class="text-gray-500 text-center">
                            <div class="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                            <p class="text-sm">Security Shield</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
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
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="/multi-currency-accounts.png" 
                    alt="Multi-Currency Accounts - Bank building with floating currency symbols and exchange icons"
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                          <div class="text-center">
                            <div class="text-4xl mb-2">💱</div>
                            <p class="text-sm text-gray-600">Multi-Currency Solutions</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
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

      {/* Testimonials Section */}
      <section className="py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Loved by world-class devs
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Engineers all around the world reach for Cursor by choice.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Column 1 */}
              <div className="space-y-6">
                <div className="animate-scroll-up">
                  <div className="space-y-6">
                    <div className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                      <p className="text-white leading-relaxed mb-4 text-sm">
                        "Started using Cursor yesterday & I'm blown away. It's how Copilot should feel. I'm completely off VSCode now."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          SW
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">Sam Whitmore</p>
                          <p className="text-xs text-gray-400">New Computer</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                      <p className="text-white leading-relaxed mb-4 text-sm">
                        "Cursor is the best product I've used in a while - it's an AI enabled editor. I just asked it to write a README for a project I've been working on - analyzed the code-base and worked first time."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          JM
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">Josh Miller</p>
                          <p className="text-xs text-gray-400">OpenAI</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                      <p className="text-white leading-relaxed mb-4 text-sm">
                        "Cursor is a necessity. Sort of my brain, proposing alternative paths, type 'tab' more than anything in my biggest workflow improvement in years."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          KW
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">Kevin Whinnery</p>
                          <p className="text-xs text-gray-400">Replicate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                <div className="animate-scroll-down">
                  <div className="space-y-6">
                    <div className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                      <p className="text-white leading-relaxed mb-4 text-sm">
                        "The most useful AI tool that I currently pay for is, hands down, is Cursor. It's fast, autocompletes when and where you need it to, handles brackets properly, sensible keyboard shortcuts, bring-your-own-model...everything is well put together."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          SN
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">shadcn</p>
                          <p className="text-xs text-gray-400">Vercel</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                      <p className="text-white leading-relaxed mb-4 text-sm">
                        "I went from never hearing about Cursor to many IC engineers telling me it's their new favorite tool. Seemingly overnight Pretty solid product-market fit."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          ZS
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">Zeke Sikelianos</p>
                          <p className="text-xs text-gray-400">Notion</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                      <p className="text-white leading-relaxed mb-4 text-sm">
                        "Cursor has changed how I write code. Instead of just autocomplete, I can now iterate on ideas almost at the speed of thought."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          CE
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">Cory Etzkorn</p>
                          <p className="text-xs text-gray-400">Linear</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-6 hidden lg:block">
                <div className="animate-scroll-up">
                  <div className="space-y-6">
                    <div className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                      <p className="text-white leading-relaxed mb-4 text-sm">
                        "The Cursor tab completion while coding is occasionally so magic it defies reality - about ~25% of the time it is anticipating exactly what I want to do. It is enough to make you believe that eventually you'll be able to code at the speed of thought."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          AS
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">Andrew Sikowitz</p>
                          <p className="text-xs text-gray-400">Figma</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                      <p className="text-white leading-relaxed mb-4 text-sm">
                        "Cursor is hands down my biggest workflow improvement in years. The AI-powered suggestions are incredibly accurate and save me hours of development time."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          MR
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">Maya Rodriguez</p>
                          <p className="text-xs text-gray-400">Stripe</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800">
                      <p className="text-white leading-relaxed mb-4 text-sm">
                        "Gonna apply to YC and list Cursor as a cofounder. This tool has revolutionized how I approach development projects."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          DL
                        </div>
                        <div>
                          <p className="font-semibold text-white text-sm">David Liu</p>
                          <p className="text-xs text-gray-400">GitHub</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Streamline Payments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">Streamline Your Payments Today!</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl font-light">Enhance your business operations with our seamless, secure, and efficient payment processing technology. Join the future of financial technology and experience hassle-free merchant acquiring today.</p>
          <Button asChild variant="outline" size="lg" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 text-base font-medium transition-all duration-200">
            <Link to="/contact" className="flex items-center gap-2">
              Contact Sales 
              <span className="text-lg">→</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;