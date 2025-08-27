const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            GAMA International is a trusted service provider in the electronic payments industry, working in close partnership with Arab Financial Services, a leading banking and fintech institution in the region.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Our collaboration enables us to deliver secure, efficient, and scalable payment solutions tailored to the needs of businesses across multiple sectors.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              We provide and manage advanced point of sale (POS) terminals that support all major debit and credit cards, including Visa and Mastercard. Whether serving small businesses or large retail operations, our focus is on helping merchants accept payments with ease, speed, and confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              With a strong presence across the Middle East, GAMA International combines innovation, compliance, and hands-on support to ensure our clients receive end-to-end service from onboarding to daily operations. Our goal is to drive sustainable growth for our merchants through reliable technology and responsive customer care.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900 uppercase tracking-wide">Our Vision</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To lead the future of digital payments by empowering businesses with secure, innovative, and compliant solutions.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900 uppercase tracking-wide">Our Mission</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To provide seamless and reliable payment services through advanced technology and trusted partnerships, helping businesses grow with confidence.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900 uppercase tracking-wide">Our Values</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We value innovation, simplicity, and trust. Our focus is on secure solutions, strong relationships, and consistently exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;