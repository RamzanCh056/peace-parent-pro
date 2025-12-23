import { Download, MessageSquare, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download the App",
    description: "Get started in seconds by downloading Be A Better Parent from the App Store or Google Play.",
    color: "bg-lavender",
    borderColor: "border-primary/30",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Ask a Question",
    description: "Type any parenting question or concern. Our AI understands the context and nuances of your situation.",
    color: "bg-mint",
    borderColor: "border-accent/30",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Get Answers & Tips",
    description: "Receive personalized, expert-backed advice instantly. Save tips and track your parenting progress.",
    color: "bg-peach",
    borderColor: "border-cta/30",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-mint text-mint-foreground text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple steps to{" "}
            <span className="text-primary">better parenting</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started is easy. Follow these three simple steps and begin 
            your journey to calmer, more confident parenting today.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-cta/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Card */}
                <div className={`bg-card rounded-3xl p-8 lg:p-10 border-2 ${step.borderColor} shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-2`}>
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-8 bg-foreground text-background px-4 py-1 rounded-full text-sm font-bold">
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <svg className="w-6 h-12 text-primary/30" viewBox="0 0 24 48" fill="none">
                      <path d="M12 0V42M12 42L4 34M12 42L20 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
