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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-primary rounded-md"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To lead the future of digital payments by empowering businesses with secure, innovative, and compliant solutions.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-card/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-accent rounded-md"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide seamless and reliable payment services through advanced technology and trusted partnerships, helping businesses grow with confidence.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-card/80 backdrop-blur-sm border border-secondary/20 rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-secondary rounded-md"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We value innovation, simplicity, and trust. Our focus is on secure solutions, strong relationships, and consistently exceeding expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;