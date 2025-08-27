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
    </div>
  );
};

export default About;