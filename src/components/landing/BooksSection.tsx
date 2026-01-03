import { BookOpen, Star, ArrowRight, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import bookToddlers from "@/assets/book-toddlers.jpg";
import bookPlaybook1 from "@/assets/book-playbook1.jpg";
import bookPlaybook2 from "@/assets/book-playbook2.jpg";
import bookPlaybook3 from "@/assets/book-playbook3.jpg";

const books = [
  {
    title: "Raising Happy Toddlers",
    author: "Celia Kibler",
    description: "A comprehensive guide to navigating the toddler years with patience and joy.",
    rating: 4.9,
    reviews: 2847,
    badge: "Bestseller",
    color: "from-primary to-lavender",
    image: bookToddlers,
  },
  {
    title: "The Parenting Playbook Vol. 1",
    author: "Celia Kibler",
    description: "Strategies and worksheets to support families at every stage of development.",
    rating: 4.8,
    reviews: 1923,
    badge: "New",
    color: "from-cta to-peach",
    image: bookPlaybook1,
  },
  {
    title: "The Parenting Playbook Vol. 2",
    author: "Celia Kibler",
    description: "Advanced techniques for building stronger family connections.",
    rating: 4.9,
    reviews: 1456,
    badge: "Popular",
    color: "from-mint to-gentle-blue",
    image: bookPlaybook2,
  },
  {
    title: "The Parenting Playbook Vol. 3",
    author: "Celia Kibler",
    description: "Expert guidance for handling challenging behaviors with compassion.",
    rating: 4.7,
    reviews: 987,
    badge: null,
    color: "from-peach to-cta",
    image: bookPlaybook3,
  },
];

const BooksSection = () => {
  return (
    <section id="books" className="py-20 lg:py-32 bg-gradient-to-b from-background via-lavender/10 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-10 w-64 h-64 bg-peach/15 rounded-full blur-3xl" />
        <BookOpen className="absolute top-40 left-20 w-10 h-10 text-primary/15 rotate-12" />
        <Sparkles className="absolute bottom-40 right-32 w-8 h-8 text-cta/20 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-lavender/30 px-5 py-2.5 rounded-full text-primary text-sm font-semibold shadow-soft">
            <BookOpen className="w-4 h-4" />
            Parenting Library
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Books by{" "}
            <span className="bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">
              Celia Kibler
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At BeABetterParent.com, we believe love is the foundation, but skills build the house. 
            Explore our comprehensive collection of parenting resources.
          </p>
        </div>

        {/* About Celia - Featured section */}
        <div className="mb-16 bg-gradient-to-r from-card via-lavender/20 to-card rounded-3xl p-8 lg:p-12 border border-border/50 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-cta/10 px-4 py-2 rounded-full text-cta text-sm font-medium">
                <Award className="w-4 h-4" />
                Meet the Author
              </div>
              
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                Parenting is the most important job in the world
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                That's why Celia Kibler, our founder, not only wrote a full manual for raising kids (Raising Happy Toddlers), 
                but also created a 4-volume series of The Parenting Playbook — filled with strategies, worksheets, 
                and guidance to support families at every stage.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Because even the best parents face challenges. And with the right tools, those challenges turn into 
                opportunities to connect, teach, and grow.
              </p>
              
              <Button variant="cta" size="lg" className="group">
                Explore All Courses
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "4", label: "Volume Series" },
                { number: "50K+", label: "Books Sold" },
                { number: "4.9", label: "Avg. Rating" },
                { number: "100+", label: "Worksheets" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="font-heading text-3xl font-bold bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Book Cover Image */}
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${book.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                {/* Badge */}
                {book.badge && (
                  <div className="absolute top-4 left-4 bg-cta text-cta-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {book.badge}
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-sm text-muted-foreground">by {book.author}</p>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {book.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'text-cta fill-cta' : 'text-border'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{book.rating}</span>
                  <span className="text-xs text-muted-foreground">({book.reviews.toLocaleString()})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
