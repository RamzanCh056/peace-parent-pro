import { BookOpen, Headphones, Video, TrendingUp, Sparkles, Heart, Star } from "lucide-react";
import counselingSession from "@/assets/counseling-session.jpg";
import parentChildBonding from "@/assets/parent-child-bonding.jpg";
import familySupport from "@/assets/family-support.jpg";

const AppShowcaseSection = () => {
  const features = [
    { 
      icon: Headphones, 
      label: "Expert Podcasts", 
      description: "Learn on the go with expert advice",
      color: "from-primary to-lavender"
    },
    { 
      icon: BookOpen, 
      label: "Curated Books", 
      description: "Parenting guides for every stage",
      color: "from-mint to-accent"
    },
    { 
      icon: Video, 
      label: "Video Library", 
      description: "Visual guidance and tutorials",
      color: "from-peach to-cta"
    },
    { 
      icon: TrendingUp, 
      label: "Progress Tracking", 
      description: "See your growth as a parent",
      color: "from-gentle-blue to-primary"
    },
  ];

  const counselingImages = [
    { image: counselingSession, alt: "Professional Parent Counseling", title: "Expert Counseling", description: "One-on-one guidance from parenting experts" },
    { image: parentChildBonding, alt: "Parent Child Bonding", title: "Stronger Bonds", description: "Build lasting connections with your children" },
    { image: familySupport, alt: "Family Support", title: "Family Support", description: "Comprehensive support for the whole family" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-mint/20 via-background to-lavender/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-10 w-56 h-56 bg-peach/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-mint/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating decorative elements */}
        <Sparkles className="absolute top-32 left-1/4 w-8 h-8 text-cta/30 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <Heart className="absolute bottom-48 right-1/3 w-6 h-6 text-primary/25 animate-bounce" style={{ animationDelay: '1.2s' }} />
        <Star className="absolute top-1/3 right-20 w-5 h-5 text-gold/30 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Counseling Gallery Section */}
        <div className="mb-28">
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 bg-lavender/40 px-5 py-2.5 rounded-full text-primary text-sm font-semibold shadow-soft">
              <Heart className="w-4 h-4 fill-current" />
              Parent Counseling
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Professional{" "}
              <span className="bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">
                Parenting Support
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Connect with expert counselors who understand your parenting journey and help you build stronger family relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {counselingImages.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-background/85 text-sm">{item.description}</p>
                </div>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-cta/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg">
                  <Heart className="w-5 h-5 text-cta-foreground fill-current" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Features Section - New attractive design */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-cta/20 px-5 py-2.5 rounded-full text-primary text-sm font-semibold shadow-soft">
            <Sparkles className="w-4 h-4" />
            App Features
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need,{" "}
            <span className="bg-gradient-to-r from-primary via-cta to-peach bg-clip-text text-transparent">
              In One App
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore podcasts, books, videos, and track your parenting journey - all designed to help you become a calmer, more confident parent.
          </p>
        </div>

        {/* Feature Cards - Beautiful grid design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon container */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.label}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-transparent to-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50K+", label: "Happy Parents", icon: Heart },
            { number: "500+", label: "Expert Sessions", icon: Video },
            { number: "100+", label: "Parenting Books", icon: BookOpen },
            { number: "4.9", label: "App Store Rating", icon: Star },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/30 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-cta group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-heading text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
