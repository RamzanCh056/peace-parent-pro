import { Headphones, BookOpen, Video, BarChart3, MessageCircle, Lightbulb } from "lucide-react";
import appDashboard from "@/assets/app-dashboard.png";
import appBooks from "@/assets/app-books.png";
import appPodcast from "@/assets/app-podcast.png";
import appVideos from "@/assets/app-videos.png";
import appProgress from "@/assets/app-progress.png";

const AppPreviewSection = () => {
  const features = [
    {
      icon: Headphones,
      title: "Expert Podcasts",
      description: "Listen to parenting experts on the go",
      color: "bg-mint",
      image: appPodcast,
    },
    {
      icon: BookOpen,
      title: "Parenting Books",
      description: "Curated library of top resources",
      color: "bg-peach",
      image: appBooks,
    },
    {
      icon: Video,
      title: "Video Courses",
      description: "Watch and learn at your pace",
      color: "bg-lavender",
      image: appVideos,
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "See your growth over time",
      color: "bg-gentle-blue",
      image: appProgress,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-peach/5 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-peach/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-lavender/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-peach/50 px-4 py-2 rounded-full text-peach-foreground text-sm font-medium mb-4">
            <Lightbulb className="w-4 h-4" />
            Everything You Need
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore the <span className="text-primary">App Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From podcasts to progress tracking, discover everything our app offers 
            to support your parenting journey.
          </p>
        </div>

        {/* Main App Preview */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Phone Mockup */}
          <div className="relative flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-cta/15 to-peach/20 rounded-[3rem] blur-3xl opacity-60" />
              
              {/* Phone frame */}
              <div className="relative bg-gradient-to-b from-card to-muted rounded-[2.5rem] p-3 shadow-2xl border border-border/50">
                <div className="bg-card rounded-[2rem] overflow-hidden">
                  <img 
                    src={appDashboard} 
                    alt="Be A Better Parent App Dashboard"
                    className="w-72 h-auto"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-8 bg-card/95 backdrop-blur-md rounded-xl p-3 shadow-float border border-border/50 animate-float">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Daily Tips</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-8 bg-card/95 backdrop-blur-md rounded-xl p-3 shadow-float border border-border/50 animate-float-slow">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-cta" />
                  <span className="text-sm font-medium text-foreground">AI Insights</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-4 lg:p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-cta/10 to-peach/10 px-6 py-4 rounded-2xl border border-border/50">
            <span className="text-3xl">🐧</span>
            <div className="text-left">
              <p className="font-semibold text-foreground">Pebbles' Tip</p>
              <p className="text-sm text-muted-foreground">"Explore one feature at a time – consistency is key!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
