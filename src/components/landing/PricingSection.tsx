import { Check, Crown, Sparkles, Heart, Star, Zap } from "lucide-react";
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
    icon: Heart,
    gradient: "from-mint/50 to-gentle-blue/30",
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
    icon: Crown,
    gradient: "from-primary/20 via-lavender/30 to-cta/20",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 via-lavender/10 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-cta/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-peach/20 rounded-full blur-2xl" />
        <Sparkles className="absolute top-32 right-1/4 w-8 h-8 text-cta/25 animate-pulse" />
        <Star className="absolute bottom-40 left-1/3 w-6 h-6 text-primary/20 animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cta/20 to-primary/20 px-5 py-2.5 rounded-full text-primary text-sm font-semibold shadow-soft">
            <Zap className="w-4 h-4" />
            Pricing Plans
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Choose Your Plan for{" "}
            <span className="bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">
              Peace of Mind
            </span>
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
              className={`relative overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                plan.highlighted 
                  ? 'border-primary/50 shadow-xl bg-gradient-to-br from-card via-lavender/10 to-card md:-mt-4 md:mb-4' 
                  : 'border-border/50 hover:border-primary/30 bg-card'
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-30 pointer-events-none`} />
              
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-cta to-cta-hover text-cta-foreground px-6 py-2 rounded-b-2xl text-sm font-bold shadow-cta">
                    <Crown className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <CardHeader className={`text-center pb-2 relative ${plan.badge ? 'pt-12' : 'pt-8'}`}>
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-primary to-cta shadow-lg' 
                    : 'bg-gradient-to-br from-mint to-gentle-blue'
                }`}>
                  <plan.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <CardTitle className="text-xl font-heading">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="font-heading text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-4">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-6 relative">
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
                  variant={plan.highlighted ? "cta" : "outline"} 
                  size="lg" 
                  className={`w-full group ${plan.highlighted ? 'shadow-cta' : ''}`}
                >
                  {plan.cta}
                  {plan.highlighted && <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />}
                </Button>
              </CardContent>
              
              {/* Decorative corner */}
              {plan.highlighted && (
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-cta/20 to-transparent rounded-full blur-xl" />
              )}
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-16 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30 max-w-3xl mx-auto">
          {[
            { icon: Sparkles, text: "14-day free trial" },
            { icon: Check, text: "Cancel anytime" },
            { icon: Heart, text: "Secure payment" },
            { icon: Star, text: "Money-back guarantee" },
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground">
              <badge.icon className="w-4 h-4 text-primary" />
              <span className="text-sm">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
