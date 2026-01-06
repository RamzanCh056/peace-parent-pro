import { Shield, Heart, Clock, Users, Award, Sparkles } from "lucide-react";

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Science-Backed Methods",
      description: "Every tip and strategy is grounded in child psychology research and proven parenting techniques.",
      color: "bg-lavender",
      iconColor: "text-primary",
    },
    {
      icon: Heart,
      title: "Compassionate Approach",
      description: "We understand parenting is hard. Our methods focus on connection, not perfection.",
      color: "bg-peach",
      iconColor: "text-peach-foreground",
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Whether it's 3 AM or 3 PM, get instant access to tips, advice, and support whenever you need it.",
      color: "bg-mint",
      iconColor: "text-mint-foreground",
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Connect with certified parenting coaches and a supportive community of parents like you.",
      color: "bg-gentle-blue",
      iconColor: "text-gentle-blue-foreground",
    },
    {
      icon: Award,
      title: "Trusted by 50K+ Parents",
      description: "Join thousands of families who have transformed their parenting journey with us.",
      color: "bg-cta/20",
      iconColor: "text-cta",
    },
    {
      icon: Sparkles,
      title: "Personalized Experience",
      description: "AI-powered recommendations tailored to your child's age, challenges, and your parenting style.",
      color: "bg-primary/20",
      iconColor: "text-primary",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-lavender/5 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            Why Parents Love Us
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Be A Better Parent</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're more than an app – we're your partner in raising confident, happy children 
            while maintaining your own peace and well-being.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 lg:p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`${benefit.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-7 h-7 ${benefit.iconColor}`} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span>Privacy Focused</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-5 h-5 text-cta" />
            <span>Award Winning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
