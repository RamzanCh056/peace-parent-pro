import { Smartphone, Star, Heart, Sparkles, Download } from "lucide-react";
import happyFamily from "@/assets/happy-family-download.jpg";

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 lg:py-32 bg-gradient-to-b from-background via-lavender/10 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-peach/20 rounded-full blur-3xl" />
        <Heart className="absolute top-20 right-1/4 w-8 h-8 text-primary/15 animate-pulse" />
        <Sparkles className="absolute bottom-32 left-1/4 w-6 h-6 text-cta/20 animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-peach to-peach/50 px-5 py-2.5 rounded-full text-peach-foreground text-sm font-semibold shadow-soft">
              <Smartphone className="w-4 h-4" />
              Available on iOS & Android
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Download{" "}
              <span className="bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">
                Be A Better Parent
              </span>{" "}
              Now!
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Join thousands of parents who are discovering the joy of calm, 
              confident parenting. Your family deserves it.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-bold text-foreground text-lg">4.9</span>
              <span className="text-muted-foreground">• 10K+ Reviews</span>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#" 
                className="group transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on App Store" 
                  className="h-14 drop-shadow-lg group-hover:drop-shadow-xl transition-all"
                />
              </a>
              <a 
                href="#" 
                className="group transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-14 drop-shadow-lg group-hover:drop-shadow-xl transition-all"
                />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              {[
                { number: "50K+", label: "Happy Parents", icon: Heart },
                { number: "4.9", label: "App Rating", icon: Star },
                { number: "24/7", label: "Support", icon: Sparkles },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left group">
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                    <stat.icon className="w-4 h-4 text-cta group-hover:scale-110 transition-transform" />
                    <p className="font-heading text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                      {stat.number}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Beautiful Family Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-cta/15 to-peach/20 rounded-[3rem] blur-2xl opacity-60" />
            
            <div className="relative group">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-card/50 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500">
                <img 
                  src={happyFamily} 
                  alt="Happy family enjoying time together"
                  className="w-full h-auto max-w-md object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Corner accent */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-cta to-cta-hover rounded-2xl flex items-center justify-center shadow-cta rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <Heart className="w-8 h-8 text-cta-foreground fill-current" />
              </div>
            </div>

            {/* Floating notification cards */}
            <div className="absolute top-6 -left-4 lg:left-0 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-float hidden sm:flex items-center gap-3 border border-border/50 hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mint to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">New tip available!</p>
                <p className="text-xs text-muted-foreground">Just now</p>
              </div>
            </div>

            <div className="absolute bottom-12 -right-4 lg:right-0 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-float hidden sm:flex items-center gap-3 border border-border/50 hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender to-primary flex items-center justify-center">
                <Download className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Get the app!</p>
                <p className="text-xs text-muted-foreground">Free download</p>
              </div>
            </div>

            <div className="absolute bottom-1/2 -left-8 lg:-left-6 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-float hidden lg:flex items-center gap-3 border border-border/50 hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peach to-cta flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Family first</p>
                <p className="text-xs text-muted-foreground">You're doing great!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
