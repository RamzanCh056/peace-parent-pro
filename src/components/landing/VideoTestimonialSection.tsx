import { Play, Star, Heart, Users } from "lucide-react";

const VideoTestimonialSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gentle-blue/30 via-background to-lavender/20 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-peach/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-mint/20 rounded-full blur-2xl" />
        {/* Floating hearts */}
        <Heart className="absolute top-32 right-1/4 w-8 h-8 text-primary/20 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <Heart className="absolute bottom-40 left-1/3 w-6 h-6 text-peach/30 animate-bounce" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium">
            <Play className="w-4 h-4" />
            Success Stories
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Real Parents,{" "}
            <span className="text-primary">Real Results</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how Celia's Family Coaching has transformed families and helped parents build stronger bonds with their children.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Video Embed */}
            <div className="lg:col-span-3 relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-cta/20 to-peach/20 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/l6ofI8jy_es"
                    title="A Testimonial to Celia's Family Coaching"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-cta text-cta-foreground px-4 py-2 rounded-full shadow-cta flex items-center gap-2 font-semibold text-sm">
                <Star className="w-4 h-4 fill-current" />
                5-Star Reviews
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                  Justin Cappon Recommends Celia Kibler for{" "}
                  <span className="text-primary">Blended Families</span>
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Discover how Celia's proven strategies have helped countless families navigate parenting challenges with confidence and compassion.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border/50 text-center group hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-cta fill-cta" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">5-Star Rating</p>
                </div>
                
                <div className="bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border/50 text-center group hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-heading text-xl font-bold text-foreground">500+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Families Helped</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="relative bg-lavender/30 rounded-2xl p-5 border-l-4 border-primary">
                <p className="text-foreground italic text-sm leading-relaxed">
                  "Celia's coaching transformed our blended family dynamics. We finally have peace and connection at home."
                </p>
                <cite className="text-muted-foreground text-sm mt-2 block">— Justin Cappon</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;
