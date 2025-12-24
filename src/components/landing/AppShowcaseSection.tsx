import appDashboard from "@/assets/app-dashboard.png";
import appPodcast from "@/assets/app-podcast.png";
import appBooks from "@/assets/app-books.png";
import appProgress from "@/assets/app-progress.png";
import appVideos from "@/assets/app-videos.png";

const PhoneFrame = ({ image, alt, className = "", variant = "default" }: { image: string; alt: string; className?: string; variant?: "default" | "hero" | "small" }) => {
  const isHero = variant === "hero";
  const isSmall = variant === "small";
  
  return (
    <div className={`relative ${className}`}>
      {/* Outer shadow glow */}
      <div className={`absolute inset-0 ${isHero ? 'bg-primary/20' : 'bg-slate-400/20'} rounded-[3rem] blur-xl transform translate-y-4`} />
      
      {/* Phone frame - premium dark bezel */}
      <div className={`relative bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 ${isSmall ? 'rounded-[2rem] p-1.5' : 'rounded-[2.5rem] p-2'} shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]`}>
        {/* Top speaker/notch area */}
        <div className={`absolute ${isSmall ? 'top-1.5 w-16 h-5' : 'top-2 w-20 h-6'} left-1/2 -translate-x-1/2 bg-slate-900 rounded-b-2xl z-20 flex items-center justify-center`}>
          <div className={`${isSmall ? 'w-8 h-1' : 'w-10 h-1.5'} bg-slate-800 rounded-full`} />
        </div>
        
        {/* Inner bezel frame */}
        <div className={`relative bg-slate-900 ${isSmall ? 'rounded-[1.75rem] p-0.5' : 'rounded-[2rem] p-1'}`}>
          {/* Screen with subtle inner shadow */}
          <div className={`relative ${isSmall ? 'rounded-[1.5rem]' : 'rounded-[1.75rem]'} overflow-hidden shadow-inner`}>
            <img 
              src={image} 
              alt={alt}
              className={`w-full h-auto object-cover ${isSmall ? 'rounded-[1.5rem]' : 'rounded-[1.75rem]'}`}
            />
            {/* Screen glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
        
        {/* Side buttons - more refined */}
        <div className={`absolute -left-0.5 ${isSmall ? 'top-16' : 'top-20'} w-0.5 h-6 bg-slate-600 rounded-l`} />
        <div className={`absolute -left-0.5 ${isSmall ? 'top-28' : 'top-32'} w-0.5 h-10 bg-slate-600 rounded-l`} />
        <div className={`absolute -right-0.5 ${isSmall ? 'top-24' : 'top-28'} w-0.5 h-8 bg-slate-600 rounded-r`} />
      </div>
    </div>
  );
};

const AppShowcaseSection = () => {
  const screenshots = [
    { image: appDashboard, alt: "App Dashboard", label: "Dashboard" },
    { image: appProgress, alt: "Progress Tracking", label: "Track Progress" },
    { image: appPodcast, alt: "Parenting Podcasts", label: "Podcasts" },
    { image: appBooks, alt: "Parenting Books", label: "Books" },
    { image: appVideos, alt: "Video Categories", label: "Videos" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-mint/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-lavender/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-peach/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium">
            <span className="text-lg">📱</span>
            App Preview
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need,{" "}
            <span className="text-primary">In One App</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore podcasts, books, videos, and track your parenting journey - all designed to help you become a calmer, more confident parent.
          </p>
        </div>

        {/* Main showcase - 3 featured phones */}
        <div className="flex justify-center items-end gap-4 md:gap-8 lg:gap-12 mb-16">
          {/* Left phone */}
          <div className="hidden md:block transform hover:-translate-y-4 transition-all duration-500 hover:scale-105">
            <PhoneFrame 
              image={appPodcast} 
              alt="Parenting Podcasts"
              className="w-44 lg:w-52"
              variant="small"
            />
            <p className="text-center mt-6 font-semibold text-foreground text-lg">Podcasts</p>
          </div>
          
          {/* Center phone - hero */}
          <div className="transform hover:-translate-y-4 transition-all duration-500 z-10">
            <PhoneFrame 
              image={appProgress} 
              alt="Progress Tracking"
              className="w-52 sm:w-60 lg:w-72"
              variant="hero"
            />
            <p className="text-center mt-6 font-bold text-foreground text-xl">Track Progress</p>
          </div>
          
          {/* Right phone */}
          <div className="hidden md:block transform hover:-translate-y-4 transition-all duration-500 hover:scale-105">
            <PhoneFrame 
              image={appBooks} 
              alt="Parenting Books"
              className="w-44 lg:w-52"
              variant="small"
            />
            <p className="text-center mt-6 font-semibold text-foreground text-lg">Books</p>
          </div>
        </div>

        {/* Secondary showcase - all 5 screens in a row */}
        <div className="relative">
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide justify-start md:justify-center px-4">
            {screenshots.map((screenshot, index) => (
              <div 
                key={index}
                className="flex-shrink-0 snap-center group"
              >
                <div className="relative transform group-hover:-translate-y-3 transition-all duration-300">
                  <PhoneFrame 
                    image={screenshot.image} 
                    alt={screenshot.alt}
                    className="w-36 sm:w-40 lg:w-48"
                    variant="small"
                  />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary/15 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 scale-90" />
                </div>
                
                <p className="text-center mt-4 font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                  {screenshot.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: "🎧", label: "Expert Podcasts", description: "Listen on the go" },
            { icon: "📚", label: "Curated Books", description: "Learn at your pace" },
            { icon: "🎬", label: "Video Library", description: "Visual guidance" },
            { icon: "📊", label: "Progress Tracking", description: "See your growth" },
          ].map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card/50 rounded-2xl backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card transition-all group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-foreground">{feature.label}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
