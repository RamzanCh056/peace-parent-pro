import { Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFamily from "@/assets/hero-family.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background Image - Full HD */}
      <div className="absolute inset-0">
        <img 
          src={heroFamily} 
          alt="Happy mother and child bonding moment"
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
        />
        {/* Enhanced gradient overlay for perfect text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent" />
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-peach/20 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center min-h-[calc(100vh-5rem)] py-12">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-lavender px-4 py-2 rounded-full text-lavender-foreground text-sm font-medium animate-fade-in-up">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
                Your Partner in Parenting
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Parenting is easier with a{" "}
                <span className="text-primary">helping hand.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Find peace, confidence, and cooperation with Be A Better Parent – 
                Your partner in raising happy, healthy children.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" className="group">
                <Download className="w-5 h-5 group-hover:animate-bounce-gentle" />
                Get Started Free
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Introduction
              </Button>
            </div>

            {/* App Store Badges */}
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a href="#" className="transition-transform hover:scale-105">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on App Store" 
                  className="h-12"
                />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender to-peach border-2 border-card flex items-center justify-center text-xs font-medium text-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-cta fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">50,000+</span> happy parents
                </p>
              </div>
            </div>
          </div>

          {/* Floating elements - now positioned on the right side */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 space-y-6 animate-fade-in-up z-20" style={{ animationDelay: "0.5s" }}>
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-card animate-float border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center">
                  <span className="text-2xl">💚</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Calm Tips</p>
                  <p className="text-xs text-muted-foreground">Available 24/7</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-card animate-float-slow border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-peach flex items-center justify-center">
                  <span className="text-2xl">🐧</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Pebbles says:</p>
                  <p className="text-xs text-muted-foreground italic">"You're doing great!"</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-card animate-float border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-lavender flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Expert Advice</p>
                  <p className="text-xs text-muted-foreground">Personalized for you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
