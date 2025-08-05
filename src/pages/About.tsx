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
            We're a technology-driven company dedicated to revolutionizing the way businesses 
            operate through innovative solutions and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We empower businesses to achieve unprecedented growth through 
                innovative technology solutions that streamline operations and 
                enhance customer experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to excellence drives us to continuously evolve 
                and adapt to the changing needs of our clients, ensuring they 
                stay ahead in today's competitive landscape.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Why Choose Us?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Innovation-first approach
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Proven track record of success
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  24/7 customer support
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Scalable solutions for growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;