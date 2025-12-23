import { Smartphone, Star } from "lucide-react";
import appProgress from "@/assets/app-progress.png";

const PhoneFrame = ({ image, alt }: { image: string; alt: string }) => (
  <div className="relative">
    {/* Phone frame */}
    <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-b-2xl z-20" />
      
      {/* Screen bezel */}
      <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
        {/* Screen content */}
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover rounded-[2.5rem]"
        />
      </div>
      
      {/* Side buttons */}
      <div className="absolute -left-1 top-28 w-1 h-12 bg-gray-700 rounded-l" />
      <div className="absolute -left-1 top-44 w-1 h-20 bg-gray-700 rounded-l" />
      <div className="absolute -right-1 top-36 w-1 h-14 bg-gray-700 rounded-r" />
    </div>
    
    {/* Reflection effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-[3rem] pointer-events-none" />
    
    {/* Bottom glow */}
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary/30 blur-2xl rounded-full" />
  </div>
);

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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

            {/* Rating */}
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-semibold text-foreground">4.9</span>
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

          {/* App Mockup with premium frame */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <PhoneFrame 
                image={appProgress} 
                alt="Be A Better Parent App - Progress Tracking"
              />
            </div>

            {/* Floating notification cards */}
            <div className="absolute top-10 -left-4 lg:left-0 bg-card rounded-2xl p-4 shadow-float animate-float hidden sm:flex items-center gap-3 border border-border/50">
              <div className="w-10 h-10 rounded-xl bg-mint flex items-center justify-center text-xl">
                ✨
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">New tip available!</p>
                <p className="text-xs text-muted-foreground">Just now</p>
              </div>
            </div>

            <div className="absolute bottom-32 -right-4 lg:right-0 bg-card rounded-2xl p-4 shadow-float animate-float-slow hidden sm:flex items-center gap-3 border border-border/50">
              <div className="w-10 h-10 rounded-xl bg-lavender flex items-center justify-center text-xl">
                🎯
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Goal achieved!</p>
                <p className="text-xs text-muted-foreground">Keep it up</p>
              </div>
            </div>

            <div className="absolute top-1/2 -left-8 lg:-left-4 bg-card rounded-2xl p-4 shadow-float animate-float hidden lg:flex items-center gap-3 border border-border/50">
              <div className="w-10 h-10 rounded-xl bg-peach flex items-center justify-center text-xl">
                🐧
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Pebbles says:</p>
                <p className="text-xs text-muted-foreground">"You're doing great!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
