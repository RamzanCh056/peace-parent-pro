import appDashboard from "@/assets/app-dashboard.png";
import appPodcast from "@/assets/app-podcast.png";
import appBooks from "@/assets/app-books.png";
import appProgress from "@/assets/app-progress.png";
import appVideos from "@/assets/app-videos.png";

const PhoneFrame = ({ image, alt, className = "" }: { image: string; alt: string; className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Phone frame */}
    <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl z-20" />
      
      {/* Screen bezel */}
      <div className="relative bg-black rounded-[2rem] overflow-hidden">
        {/* Screen content */}
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover rounded-[2rem]"
        />
      </div>
      
      {/* Side buttons */}
      <div className="absolute -left-1 top-24 w-1 h-10 bg-gray-700 rounded-l" />
      <div className="absolute -left-1 top-40 w-1 h-16 bg-gray-700 rounded-l" />
      <div className="absolute -right-1 top-32 w-1 h-12 bg-gray-700 rounded-r" />
    </div>
    
    {/* Reflection effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-[2.5rem] pointer-events-none" />
  </div>
);

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
        <div className="flex justify-center items-end gap-6 lg:gap-12 mb-16">
          {/* Left phone */}
          <div className="hidden md:block transform hover:-translate-y-4 transition-transform duration-500">
            <PhoneFrame 
              image={appPodcast} 
              alt="Parenting Podcasts"
              className="w-48 lg:w-56 opacity-80 hover:opacity-100 transition-opacity"
            />
            <p className="text-center mt-4 font-medium text-foreground">Podcasts</p>
          </div>
          
          {/* Center phone - hero */}
          <div className="transform hover:-translate-y-4 transition-transform duration-500">
            <PhoneFrame 
              image={appProgress} 
              alt="Progress Tracking"
              className="w-56 sm:w-64 lg:w-72"
            />
            <p className="text-center mt-4 font-semibold text-foreground text-lg">Track Progress</p>
          </div>
          
          {/* Right phone */}
          <div className="hidden md:block transform hover:-translate-y-4 transition-transform duration-500">
            <PhoneFrame 
              image={appBooks} 
              alt="Parenting Books"
              className="w-48 lg:w-56 opacity-80 hover:opacity-100 transition-opacity"
            />
            <p className="text-center mt-4 font-medium text-foreground">Books</p>
          </div>
        </div>

        {/* Secondary showcase - scrollable on mobile */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide justify-center">
            {screenshots.map((screenshot, index) => (
              <div 
                key={index}
                className="flex-shrink-0 snap-center group"
              >
                <div className="relative">
                  <PhoneFrame 
                    image={screenshot.image} 
                    alt={screenshot.alt}
                    className="w-40 sm:w-44 group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
                
                <p className="text-center mt-3 font-medium text-muted-foreground group-hover:text-foreground transition-colors">
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
