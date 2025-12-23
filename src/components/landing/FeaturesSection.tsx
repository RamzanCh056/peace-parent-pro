import { MessageCircle, Brain, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MessageCircle,
    title: "Instant Advice",
    description: "Get real-time parenting guidance whenever you need it. Our AI-powered assistant is always ready to help.",
    color: "bg-lavender",
    iconColor: "text-lavender-foreground",
  },
  {
    icon: Brain,
    title: "Calm Parenting Tips",
    description: "Learn techniques to stay calm and centered, even in the most challenging moments with your children.",
    color: "bg-mint",
    iconColor: "text-mint-foreground",
  },
  {
    icon: Users,
    title: "Expert Coaching",
    description: "Connect with certified parenting coaches who understand your unique challenges and family dynamics.",
    color: "bg-peach",
    iconColor: "text-peach-foreground",
  },
  {
    icon: BookOpen,
    title: "Personalized Programs",
    description: "Access tailored parenting programs designed for your child's age, personality, and your family's needs.",
    color: "bg-gentle-blue",
    iconColor: "text-gentle-blue-foreground",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-lavender text-lavender-foreground text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need for{" "}
            <span className="text-primary">peaceful parenting</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive suite of tools and resources helps you navigate every 
            stage of your parenting journey with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              variant="feature"
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 lg:p-8 text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
