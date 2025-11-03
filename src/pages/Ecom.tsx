import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Ecom = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            E-commerce Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Secure online payment processing for your e-commerce business. Integrate seamlessly with your online store.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="mb-4">Secure Payments</CardTitle>
                <CardDescription>
                  PCI DSS compliant payment processing with advanced fraud protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Keep your customers' data safe with enterprise-grade security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="mb-4">Global Reach</CardTitle>
                <CardDescription>
                  Accept payments from customers worldwide in multiple currencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Expand your business globally with multi-currency support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="mb-4">Payment Gateways</CardTitle>
                <CardDescription>
                  Comprehensive payment gateway solutions with advanced security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our gateway accommodates various versatile payment methods, catering to all customer preferences. With advanced 3D secured transaction protocols, we safeguard transaction data and minimize fraud risks. Access to detailed analytics helps refine payment strategies and improve operational efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecom;