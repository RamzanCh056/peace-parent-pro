import { Check, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free Membership",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with calm parenting techniques.",
    features: [
      "Access to basic parenting tips",
      "Daily parenting motivation",
      "Community forum access",
      "5 AI questions per month",
      "Email support",
    ],
    highlighted: false,
    cta: "Get Started Free",
  },
  {
    name: "Pro Membership",
    price: "$12",
    period: "/month",
    description: "Everything you need for confident, stress-free parenting.",
    features: [
      "Unlimited AI questions",
      "Personalized parenting programs",
      "1-on-1 expert coaching sessions",
      "Premium courses & workshops",
      "Priority 24/7 support",
      "Family progress tracking",
      "Exclusive community events",
    ],
    highlighted: true,
    cta: "Start Pro Trial",
    badge: "Best Value",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gentle-blue text-gentle-blue-foreground text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Plan for{" "}
            <span className="text-primary">Peace of Mind</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free and upgrade when you're ready. Cancel anytime, no questions asked.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              variant={plan.highlighted ? "highlighted" : "pricing"}
              className={`relative ${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-cta text-cta-foreground px-4 py-1.5 rounded-full text-sm font-bold shadow-cta">
                    <Crown className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-heading">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="font-heading text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-4">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-6">
                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'bg-cta/20 text-cta' : 'bg-primary/20 text-primary'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant={plan.highlighted ? "hero" : "heroOutline"} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>Secure payment</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>Money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
