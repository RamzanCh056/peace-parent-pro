import consistencyImage from "@/assets/app-consistency-progress.png";
import { Rocket, Award, Target, Sparkles } from "lucide-react";

const ConsistencyShowcase = () => {
  const features = [
    {
      icon: Rocket,
      title: "Level Up",
      description: "Track progress from Calm Starter → Calm Explorer and beyond",
      color: "bg-mint",
    },
    {
      icon: Award,
      title: "Earn Badges",
      description: "Celebrate small wins with badges and streaks",
      color: "bg-cta",
    },
    {
      icon: Target,
      title: "Penguin Guides",
      description: "Friendly characters offer bite-sized tips",
      color: "bg-lavender",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Tips",
      description: "Personalized, actionable next steps",
      color: "bg-primary",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-mint/20 via-background to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-mint/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
            <Rocket className="w-4 h-4" />
            New Feature
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Consistency <span className="text-primary">&</span> Progress
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Personalized, gamified support for parents inside the{" "}
            <span className="text-primary font-semibold">"Be a Better Parent"</span> app
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-mint/30 to-primary/10 p-4 lg:p-8">
              <img
                src={consistencyImage}
                alt="Consistency & Progress feature showing app screens with badges, levels, and penguin guides"
                className="w-full h-auto rounded-2xl"
              />
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-mint/20 to-primary/20 blur-xl -z-10" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-cta text-cta-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-float">
              🎯 Track Your Journey
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Pebbles tip */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/20 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="text-3xl">🐧</div>
              <div>
                <p className="font-heading font-semibold text-foreground">Pebbles' Tip</p>
                <p className="text-muted-foreground italic">
                  "Progress isn't about perfection — only consistency."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsistencyShowcase;
