import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PayByLink = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Pay-by-Link Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Send secure payment links to customers via email, SMS, or social media. Perfect for invoicing and remote payments.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="mb-4">Instant Link Generation</CardTitle>
                <CardDescription>
                  Create payment links in seconds with custom amounts and descriptions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Generate secure payment links instantly for any amount.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="mb-4">Multiple Channels</CardTitle>
                <CardDescription>
                  Share links via email, SMS, WhatsApp, or any messaging platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reach customers through their preferred communication channels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="mb-4">Payment Tracking</CardTitle>
                <CardDescription>
                  Track payment status and send automatic reminders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Monitor payments and automate follow-ups for unpaid invoices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayByLink;