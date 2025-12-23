import { Smartphone } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const DownloadSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-peach px-4 py-2 rounded-full text-peach-foreground text-sm font-medium">
              <Smartphone className="w-4 h-4" />
              Available on iOS & Android
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Download{" "}
              <span className="text-primary">Be A Better Parent</span>{" "}
              Now!
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg">
              Join thousands of parents who are discovering the joy of calm, 
              confident parenting. Your family deserves it.
            </p>

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
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <p className="font-heading text-3xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Parents</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-heading text-3xl font-bold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground">App Rating</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-heading text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img
                src={appMockup}
                alt="Be A Better Parent App"
                className="w-72 md:w-80 lg:w-96 drop-shadow-2xl"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent blur-2xl -z-10 scale-110" />
            </div>

            {/* Floating notification cards */}
            <div className="absolute top-10 -left-4 lg:left-0 bg-card rounded-2xl p-4 shadow-float animate-float hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-mint flex items-center justify-center text-xl">
                ✨
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">New tip available!</p>
                <p className="text-xs text-muted-foreground">Just now</p>
              </div>
            </div>

            <div className="absolute bottom-20 -right-4 lg:right-0 bg-card rounded-2xl p-4 shadow-float animate-float-slow hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lavender flex items-center justify-center text-xl">
                🎯
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Goal achieved!</p>
                <p className="text-xs text-muted-foreground">Keep it up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
