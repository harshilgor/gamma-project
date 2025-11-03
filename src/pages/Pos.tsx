import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pos = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            POS Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Complete point-of-sale payment solutions for retail businesses. Accept payments seamlessly with our modern POS systems.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="mb-4">Easy Setup</CardTitle>
                <CardDescription>
                  Quick and simple installation process for your retail environment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get up and running in minutes with our intuitive setup process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="mb-4">Multiple Payment Methods</CardTitle>
                <CardDescription>
                  Accept credit cards, debit cards, contactless, and mobile payments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Support for all major payment methods your customers prefer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="mb-4">Real-time Analytics</CardTitle>
                <CardDescription>
                  Track sales, inventory, and customer data in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Make informed business decisions with comprehensive reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pos;